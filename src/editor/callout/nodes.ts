import { NodeSpec } from "prosemirror-model";

import { CalloutType } from "./types";

export const calloutNodes: Record<string, NodeSpec> = {
  callout: {
    group: "block",
    content: "block+",
    defining: true,
    selectable: false,
    isolating: true,
    attrs: {
      type: { default: CalloutType.info }
    },
    toDOM: (node) => {
      return [
        "div",
        { class: `callout ${node.attrs.type}` },
        ["div", { class: "content" }, 0]
      ];
    }
  }
};
