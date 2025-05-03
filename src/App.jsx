import Header from "./component/Header";
import CreateArea from "./component/CreateArea";
import Footer from "./component/Footer";
import Note from "./component/Note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  };

  const deleteItem = (id) => {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  const editItem = (id, newTitle, newContent) => {
    setNotes((prevNote) => {
      return prevNote.map((note, index) =>
        index === id ? { ...note, title: newTitle, content: newContent } : note
      );
    });
  };
  return (
    <>
      <main>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              id={index}
              key={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteItem}
              onEdit={editItem}
            />
          );
        })}

        <Footer />
      </main>
    </>
  );
}

export default App;
