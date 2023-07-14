import { CalloutType } from "./types";

export const calloutTypes: CalloutType[] = [
  CalloutType.info,
  CalloutType.success,
  CalloutType.warning
];

export const calloutColors: Record<CalloutType, string> = {
  [CalloutType.info]: "#3a86ff",
  [CalloutType.success]: "#3EAC40",
  [CalloutType.warning]: "#FFB938"
};
