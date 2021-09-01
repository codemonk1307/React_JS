
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
                    placeholder="What's the Task"
                />
                <textarea
                    name="task"
                    onChange={handleChange}
                    value={note.task}
                    placeholder="Task Description..."
                    rows="3"
                />
                <textarea
                    name="deadline"
                    onChange={handleChange}
                    value={note.deadline}
                    placeholder="Task Deadline"
                    rows="1"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
