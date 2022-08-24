import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import "./App.css";
import notes from "../notes";

// function mapNote(notes) {
//   return notes.map((note) => {
//     return <Note key={note.key} title={note.title} content={note.content} />;
//   });
// }

function App() {
  return (
    <div>
      <Heading />
      {notes.map((note) => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}
      {/* {mapNote(notes)} */}
      <Footer />
    </div>
  );
}

export default App;
