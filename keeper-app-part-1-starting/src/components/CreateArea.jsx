import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        task: "",
        deadline: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            task: "",
            deadline: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Task Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.task}
                    placeholder="Task description..."
                    rows="3"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
