export const templatePingType = "template:ping";
export const templatePongType = "template:pong";

export interface TemplatePingMessage {
  type: typeof templatePingType;
}

export interface TemplatePongMessage {
  type: typeof templatePongType;
  browser: string;
  manifestVersion: number;
}

interface RuntimeMessenger {
  sendMessage: (message: TemplatePingMessage) => Promise<unknown>;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && Object(value) === value;

export const createPingMessage = (): TemplatePingMessage => ({
  type: templatePingType,
});

export const createPongMessage = (
  browser: string,
  manifestVersion: number,
): TemplatePongMessage => ({
  type: templatePongType,
  browser,
  manifestVersion,
});

export const isPingMessage = (value: unknown): value is TemplatePingMessage =>
  isRecord(value) && value.type === templatePingType;

export const isPongMessage = (value: unknown): value is TemplatePongMessage =>
  isRecord(value) &&
  value.type === templatePongType &&
  typeof value.browser === "string" &&
  typeof value.manifestVersion === "number";

export const pingBackground = async (runtime: RuntimeMessenger): Promise<TemplatePongMessage> => {
  const response = await runtime.sendMessage(createPingMessage());

  if (!isPongMessage(response)) {
    throw new Error("Unexpected response from the background script.");
  }

  return response;
};
