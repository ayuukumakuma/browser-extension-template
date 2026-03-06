import { describe, expect, it, vi } from "vitest";

import { createPingMessage, createPongMessage, pingBackground } from "../lib/template-protocol";

describe("pingBackground", () => {
  it("sends a ping message and resolves the typed response", async () => {
    const sendMessage = vi.fn().mockResolvedValue(createPongMessage("chrome", 3));

    await expect(pingBackground({ sendMessage })).resolves.toEqual(createPongMessage("chrome", 3));
    expect(sendMessage).toHaveBeenCalledWith(createPingMessage());
  });

  it("rejects invalid responses", async () => {
    const sendMessage = vi.fn().mockResolvedValue({ type: "unexpected" });

    await expect(pingBackground({ sendMessage })).rejects.toThrow(
      "Unexpected response from the background script.",
    );
  });
});
