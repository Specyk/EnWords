import React from 'react'

export default function AddNew(props) {
    return (
        <div>
            <form onSubmit={props.handleAddWord}>
                <input id="en" type="text"></input>
                <input id="pl" type="text"></input>
                <input id="explanation" type="text"></input>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}
