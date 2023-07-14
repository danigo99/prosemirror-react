import React, { useEffect, useRef } from "react";
import OrderedMap from "orderedmap";

import { Node, NodeSpec } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema } from "prosemirror-model";
import { schema as baseSchema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";

import { NodeViewsSpec } from "./core/types";
import { calloutNodes } from "./callout/nodes";
import { CalloutNodeView } from "./callout/nodeviews";

import "./editor.css";

interface EditorProps {
  value: object;
}

export const Editor: React.FC<EditorProps> = ({ value }: EditorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const editorRef = useRef<EditorView>(null!);
  const baseNodes: OrderedMap<NodeSpec> | NodeSpec = addListNodes(
    baseSchema.spec.nodes,
    "paragraph block*",
    "block"
  );
  const nodes = baseNodes.append(calloutNodes);
  const marks = baseSchema.spec.marks;
  const schema = new Schema({ nodes, marks });
  const doc = Node.fromJSON(schema, value);
  const plugins = exampleSetup({ schema });
  const state = EditorState.create({ doc, plugins });

  useEffect(() => {
    const nodeViews: NodeViewsSpec = {
      callout: (node: Node, view: EditorView) => new CalloutNodeView(node, view)
    };
    if (ref.current !== null && !editorRef.current) {
      editorRef.current = new EditorView(ref.current, { state, nodeViews });
    }
  }, [state]);

  return <div ref={ref} className="editor-sandbox" />;
};
