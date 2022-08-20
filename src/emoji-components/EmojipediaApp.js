import "./emojipedia.css";
import { createEntry } from "./Entry";
import emojis from "./emojis";

export default function Emojipedia() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojis.map(createEntry)}</dl>
    </div>
  );
}
