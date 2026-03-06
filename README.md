# Browser Extension Template

Minimal browser extension template built with WXT, React, Bun, TypeScript, and optional Nix.

## Requirements

- Bun
- Chrome or Chromium
- Firefox
- Nix (optional, for `nix develop` / `direnv`)

## Development Shell

```bash
nix develop
```

If `package.json` or `bun.lock` changed, the shell may refresh dependencies for you.

## Setup

```bash
bun install
```

This runs `wxt prepare` via `postinstall` and generates the `.wxt/` TypeScript config.

## Initialize with Project Name

Run once after cloning to replace template placeholders with your project name:

```bash
bun run init <project-name>
```

Example: `bun run init my-awesome-extension` updates package name, extension display name, protocol identifiers, and renames `lib/template-*.ts` files. Run `bun install` afterward to refresh the lockfile.

## Commands

```bash
bun run dev
bun run dev:chrome
bun run dev:firefox
bun run test
bun run build
bun run zip
bun run check
```

### GitHub Actions Lint (local)

Static analysis for `.github/workflows/` using actionlint, ghalint, and zizmor:

```bash
bun run lint:gha
```

Install the tools. With `nix develop`, actionlint is included; otherwise install all via Homebrew:

```bash
brew install actionlint
brew install suzuki-shunsuke/ghalint/ghalint
brew install zizmor
```

## Template Contents

- `background` entrypoint with install logging and popup message handling
- React `popup` entrypoint for verifying popup-to-background messaging
- Minimal manifest config with icons only
- Vitest + WXT test setup for background and config behavior

## Build Outputs

- Chrome: `.output/chrome-mv3/`
- Firefox: `.output/firefox-mv2/`

## Load Unpacked Extension

### Chrome

1. Open `chrome://extensions/`
2. Enable developer mode
3. Choose "Load unpacked"
4. Select `.output/chrome-mv3/`

### Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. Choose "Load Temporary Add-on"
3. Select any file inside `.output/firefox-mv2/`

## Optional Local Browser Overrides

If WXT cannot find your browser binaries, create an untracked `web-ext.config.ts`:

```ts
import { defineWebExtConfig } from "wxt";

export default defineWebExtConfig({
  binaries: {
    chrome: "/path/to/chrome",
    firefox: "/path/to/firefox",
  },
});
```

This file is ignored by git and is intended for machine-local overrides only.

## Scope

This template intentionally keeps the initial setup small. Add permissions, options pages, content scripts, storage, or browser-specific behavior only when the actual extension needs them.
