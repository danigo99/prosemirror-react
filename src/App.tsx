import "./styles.css";

import { Editor } from "./editor";
import { initialDoc } from "./editor/doc";

export default function App() {
  return (
    <div className="App">
      <h4>Prosemirror goes React</h4>
      <hr />
      <Editor value={initialDoc} />
    </div>
  );
}
