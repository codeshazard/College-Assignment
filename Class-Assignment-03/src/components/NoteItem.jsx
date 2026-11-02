import { useContext } from "react";
import { ThemeContext } from "../themeContext";

function NoteItem({ note, onDelete }) {
  const { dark } = useContext(ThemeContext);

  return (
    <li
      style={{
        background: dark ? "#080808" : "#eae6e6",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      {note.text}
      <button onClick={() => onDelete(note.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
}

export default NoteItem;