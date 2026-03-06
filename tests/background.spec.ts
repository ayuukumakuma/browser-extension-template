import { describe, expect, it, vi } from "vitest";

import {
  createMessageHandler,
  registerBackground,
  type BackgroundApi,
} from "../entrypoints/background";
import { createPingMessage, createPongMessage } from "../lib/template-protocol";

describe("registerBackground", () => {
  it("registers install and message listeners", () => {
    const onInstalled = { addListener: vi.fn() };
    const onMessage = { addListener: vi.fn() };
    const backgroundApi: BackgroundApi = {
      runtime: {
        onInstalled,
        onMessage,
      },
    };

    registerBackground(backgroundApi, "chrome", 3);

    expect(onInstalled.addListener).toHaveBeenCalledTimes(1);
    expect(onMessage.addListener).toHaveBeenCalledTimes(1);
  });

  it("responds to ping messages", () => {
    const handleMessage = createMessageHandler("firefox", 2);
    const sendResponse = vi.fn();

    expect(handleMessage(createPingMessage(), {}, sendResponse)).toBeUndefined();
    expect(sendResponse).toHaveBeenCalledWith(createPongMessage("firefox", 2));
  });

  it("ignores unrelated messages", () => {
    const handleMessage = createMessageHandler("firefox", 2);
    const sendResponse = vi.fn();

    expect(handleMessage({ type: "noop" }, {}, sendResponse)).toBeUndefined();
    expect(sendResponse).not.toHaveBeenCalled();
  });
});
