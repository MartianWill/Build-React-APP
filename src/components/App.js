import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import "./App.css";
import CreateNote from "./CreateNote";
import React, { useState } from "react";
// import notes from "../notes";

// function mapNote(notes) {
//   return notes.map((note) => {
//     return <Note key={note.key} title={note.title} content={note.content} />;
//   });
// }

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(newNote) {
    setNoteArray((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setNoteArray((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreateNote onAdd={addNote} />
      {noteArray.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );

  // return (
  //   <div>
  //     <Heading />
  //     {notes.map((note) => {
  //       return (
  //         <Note key={note.key} title={note.title} content={note.content} />
  //       );
  //     })}
  //     {/* {mapNote(notes)} */}
  //     <Footer />
  //   </div>
  // );
}

export default App;
