
import React from "react";

function Tasks(props) {
    return (
        <div className="note">
            {/* use {} to embed js code in our HTML tags */}
            <h1>{props.Title}</h1>
            <p>{props.Description}</p>
            <p>{props.Deadline}</p>
        </div>
    );
}

function Notes() {
    return (
        <div>
            <Tasks
                Title="My Sideul"
                Description="Today I'll phinish React JS :|"
                Deadline="10 hours"
            />
            <Tasks
                Title="My Task"
                Description="Today I'll do 10 Leetcodes :)"
                Deadline="10 hours"
            />
            <Tasks
                Title="My Goal"
                Description="Today I'll learn Recursion :("
                Deadline="10 hours"
            />
        </div>
    );
}

export default Notes;