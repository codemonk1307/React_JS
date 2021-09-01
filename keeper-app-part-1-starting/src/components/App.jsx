
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";


function App() {
    return (
        <div>
            <Header />
            {notes.map((noteItem) =>
                <Note
                    key={noteItem.id}
                    title={noteItem.title}
                    task={noteItem.task}
                    deadline={noteItem.deadline}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;