import { browser } from "wxt/browser";

import { extensionName } from "../lib/template-metadata";
import {
  createPongMessage,
  isPingMessage,
  type TemplatePongMessage,
} from "../lib/template-protocol";

export interface BackgroundApi {
  runtime: {
    onInstalled: {
      addListener: (listener: () => void) => void;
    };
    onMessage: {
      addListener: (
        listener: (
          message: unknown,
          sender: unknown,
          sendResponse: (response: TemplatePongMessage) => void,
        ) => boolean | undefined,
      ) => void;
    };
  };
}

export const createMessageHandler =
  (
    browserName: string,
    manifestVersion: number,
  ): ((
    message: unknown,
    sender: unknown,
    sendResponse: (response: TemplatePongMessage) => void,
  ) => boolean | undefined) =>
  (message, _sender, sendResponse) => {
    if (!isPingMessage(message)) {
      return undefined;
    }

    sendResponse(createPongMessage(browserName, manifestVersion));

    return undefined;
  };

export const registerBackground = (
  api: BackgroundApi,
  browserName: string,
  manifestVersion: number,
): void => {
  api.runtime.onInstalled.addListener(() => {
    console.info(`${extensionName} installed`);
  });

  api.runtime.onMessage.addListener(createMessageHandler(browserName, manifestVersion));
};

export default defineBackground(() => {
  registerBackground(
    browser,
    import.meta.env.BROWSER,
    browser.runtime.getManifest().manifest_version,
  );
});
