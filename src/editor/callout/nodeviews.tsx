import ReactDOM from "react-dom";
import { Node as ProseMirrorNode } from "prosemirror-model";
import { EditorView, NodeView } from "prosemirror-view";

import { Callout } from "./components/Callout/Callout";
import { CalloutNodeAttrs } from "./types";

export class CalloutNodeView implements NodeView {
  public dom: HTMLElement;
  public contentDOM: HTMLElement;

  constructor(public node: ProseMirrorNode, public view: EditorView) {
    this.dom = document.createElement("div");
    this.contentDOM = document.createElement("div");
    this.render();
  }

  update(node: ProseMirrorNode): boolean {
    if (this.node.type !== node.type) {
      return false;
    }

    this.node = node;
    this.render();
    return true;
  }

  destroy(): void {
    ReactDOM.unmountComponentAtNode(this.dom);
  }

  render = (): void => {
    const attrs = this.node.attrs as CalloutNodeAttrs;
    ReactDOM.render(
      <Callout contentDOMRef={this.handleRef} type={attrs.type} />,
      this.dom
    );
  };

  handleRef = (node: HTMLElement | null): void => {
    if (node && this.contentDOM && !node.contains(this.contentDOM)) {
      node.appendChild(this.contentDOM);
    }
  };
}
