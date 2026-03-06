#!/usr/bin/env bun
/**
 * Initialize the template with a project name.
 * Usage: bun run init <project-name>
 *
 * Replaces template placeholders and renames template-* files.
 * Run only once on a fresh template clone.
 */

const TEMPLATE_PACKAGE_NAME = "browser-extension-template";
const TEMPLATE_DISPLAY_NAME = "Browser Extension Template";
const TEMPLATE_PREFIX = "template";
const TEMPLATE_PROTOCOL_PREFIX = "template";

function toKebabCase(s: string): string {
  return (
    s
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase() || "extension"
  );
}

function toDisplayName(s: string): string {
  return toKebabCase(s)
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function toCamelCase(s: string): string {
  const parts = toKebabCase(s).split("-");
  return (
    parts[0] +
    parts
      .slice(1)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("")
  );
}

function toPascalCase(s: string): string {
  const camel = toCamelCase(s);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function replaceAll(content: string, replacements: [string, string][]): string {
  let result = content;
  for (const [from, to] of replacements) {
    result = result.split(from).join(to);
  }
  return result;
}

async function main(): Promise<void> {
  const arg = process.argv.at(2);
  if (!arg) {
    console.error("Usage: bun run init <project-name>");
    console.error("Example: bun run init my-awesome-extension");
    process.exit(1);
  }

  const packageName = toKebabCase(arg);
  const displayName = toDisplayName(arg);
  const camelPrefix = toCamelCase(arg);
  const pascalPrefix = toPascalCase(arg);
  const protocolPrefix = packageName;

  const replacements: [string, string][] = [
    [TEMPLATE_PACKAGE_NAME, packageName],
    [TEMPLATE_DISPLAY_NAME, displayName],
    [`${TEMPLATE_PROTOCOL_PREFIX}:ping`, `${protocolPrefix}:ping`],
    [`${TEMPLATE_PROTOCOL_PREFIX}:pong`, `${protocolPrefix}:pong`],
    [`${TEMPLATE_PREFIX}PingType`, `${camelPrefix}PingType`],
    [`${TEMPLATE_PREFIX}PongType`, `${camelPrefix}PongType`],
    [`TemplatePingMessage`, `${pascalPrefix}PingMessage`],
    [`TemplatePongMessage`, `${pascalPrefix}PongMessage`],
  ];

  const projectRoot = `${import.meta.dir}/..`;

  const templateMetadataPath = `${projectRoot}/lib/template-metadata.ts`;
  const templateProtocolPath = `${projectRoot}/lib/template-protocol.ts`;
  const newMetadataPath = `${projectRoot}/lib/${packageName}-metadata.ts`;
  const newProtocolPath = `${projectRoot}/lib/${packageName}-protocol.ts`;

  const importReplacements: [string, string][] = [
    ["template-metadata", `${packageName}-metadata`],
    ["template-protocol", `${packageName}-protocol`],
  ];

  const filesToUpdate: string[] = [
    `${projectRoot}/package.json`,
    `${projectRoot}/README.md`,
    `${projectRoot}/entrypoints/popup/index.html`,
    `${projectRoot}/flake.nix`,
    `${projectRoot}/.github/workflows/ci.yml`,
    `${projectRoot}/wxt.config.ts`,
    `${projectRoot}/entrypoints/background.ts`,
    `${projectRoot}/entrypoints/popup/app.tsx`,
    `${projectRoot}/tests/background.spec.ts`,
    `${projectRoot}/tests/wxt-config.spec.ts`,
  ];

  const packageJson = await Bun.file(`${projectRoot}/package.json`).text();
  if (!packageJson.includes(TEMPLATE_PACKAGE_NAME)) {
    console.error("This project does not appear to be the template. Aborting.");
    process.exit(1);
  }

  for (const filePath of filesToUpdate) {
    const file = Bun.file(filePath);
    if (!(await file.exists())) {
      console.error(`File not found: ${filePath}`);
      process.exit(1);
    }
    let content = await file.text();
    content = replaceAll(content, replacements);
    content = replaceAll(content, importReplacements);
    await Bun.write(filePath, content);
  }

  const metadataContent = await Bun.file(templateMetadataPath).text();
  const protocolContent = await Bun.file(templateProtocolPath).text();

  await Bun.write(newMetadataPath, replaceAll(metadataContent, replacements));
  await Bun.write(newProtocolPath, replaceAll(protocolContent, replacements));

  await Bun.write(
    `${projectRoot}/tests/${packageName}-protocol.spec.ts`,
    replaceAll(
      replaceAll(
        await Bun.file(`${projectRoot}/tests/template-protocol.spec.ts`).text(),
        replacements,
      ),
      importReplacements,
    ),
  );

  const { rm } = await import("node:fs/promises");
  await rm(templateMetadataPath, { force: true });
  await rm(templateProtocolPath, { force: true });
  await rm(`${projectRoot}/tests/template-protocol.spec.ts`, { force: true });

  const proc = Bun.spawn(["bun", "run", "format"], {
    cwd: projectRoot,
    stdout: "inherit",
    stderr: "inherit",
  });
  await proc.exited;

  console.log(`Initialized project: ${displayName} (${packageName})`);
  console.log("Run `bun install` to refresh lockfile, then `bun run check` to verify.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
