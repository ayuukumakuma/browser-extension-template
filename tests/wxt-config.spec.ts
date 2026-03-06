import { describe, expect, it } from "vitest";

import config, { manifest } from "../wxt.config";
import { extensionDescription, extensionName, manifestIconPath } from "../lib/template-metadata";

describe("wxt config", () => {
  it("keeps the template minimal while enabling React", () => {
    expect(config.modules).toContain("@wxt-dev/module-react");
    expect(manifest.name).toBe(extensionName);
    expect(manifest.description).toBe(extensionDescription);
    expect(manifest.icons).toMatchObject({
      16: manifestIconPath,
      32: manifestIconPath,
      48: manifestIconPath,
      128: manifestIconPath,
    });
    expect("permissions" in manifest).toBe(false);
    expect("host_permissions" in manifest).toBe(false);
  });
});
