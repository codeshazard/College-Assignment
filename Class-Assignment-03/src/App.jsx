import { useState, useEffect, useContext } from "react";
import { ThemeProvider } from "./ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle";
import NoteItem from "./components/NoteItem";
import { ThemeContext } from "./themeContext";

function NotesApp() {
  const { dark } = useContext(ThemeContext);

  const [input, setInput] = useState("");

  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    document.title = `Notes (${notes.length})`;
  }, [notes]);

  function addNote() {
    if (!input.trim()) return;

    setNotes([
      ...notes,
      {
        id: Date.now(),
        text: input.trim(),
      },
    ]);

    setInput("");
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div
      style={{
        background: dark ? "#121212" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1>Notes App</h1>

      <ThemeToggle />

      <div style={{ marginTop: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a note"
        />

        <button onClick={addNote}>Add Note</button>
      </div>

      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NotesApp />
    </ThemeProvider>
  );
}
