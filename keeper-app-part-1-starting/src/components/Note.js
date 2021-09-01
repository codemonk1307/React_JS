
import React from "react";

// Rename the Tasks function to -> Note
// function Tasks(props) {

function Note(props) {
    return (
        <div className="note">
            {/* use {} to embed js code in our HTML tags */}
            <h1>{props.title}</h1>
            <p>{props.task}</p>
            <p>{props.deadline}</p>
        </div>
    );
}

export default Note;

