

import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        task: "",
        deadline: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
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

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="What's the Task"
                    />
                )}

                <textarea
                    name="task"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.task}
                    placeholder="Task Description..."
                    rows={isExpanded ? 3 : 1}
                />

                {isExpanded && (
                    <textarea
                        name="deadline"
                        onClick={expand}
                        onChange={handleChange}
                        value={note.deadline}
                        placeholder="Task Deadline"
                        rows={isExpanded ? 1 : 1}
                    />
                )}

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;

