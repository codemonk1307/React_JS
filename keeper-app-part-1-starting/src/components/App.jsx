
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import { func } from "assert-plus";
import { not } from "micromatch";


function createNotes(noteItem){
    return <Note
        key = {noteItem.id}
        title = {noteItem.title}
        task = {noteItem.task}
        deadline = {noteItem.deadline}
    />
}


function App() {
    return (
    <div>
        <Header />
        {notes.map(createNotes)}
        <Footer />
    </div>
    );
}

export default App;