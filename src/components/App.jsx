import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNote] = useState([]);

  function addNote(note) {
    setNote((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesArray &&
        notesArray.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
