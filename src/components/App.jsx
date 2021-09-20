import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) { 
    setNotes(prevNotes => ([...prevNotes, newNote]));
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return(
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote} />
      })}
      <Footer />
    </div>    
  )
};

export default App;
