import React from 'react'

export default function AddNew(props) {
    return (
        <form className="AddNew" onSubmit={props.handleAddWord}>
            <span className="en"><input id="en" type="text" placeholder="English version"></input></span>
            <span className="pl"><input id="pl" type="text" placeholder="Polish version"></input></span>
            <span className="definition"><input id="pl" type="text" placeholder="Polish version"></input></span>
            <span className="example">
                <input id="pl" type="text" placeholder="Polish version"></input>
                <input className="saveBtn" type="submit" value="+"></input>
            </span>
        </form>
    )
}
