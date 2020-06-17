import React from 'react'

export default function AddNew(props) {
    return (
        <form className="AddNew" onSubmit={props.addNewHandler}>
            <span className="en"><input id="en" type="text" placeholder="English version"></input></span>
            <span className="pl"><input id="pl" type="text" placeholder="Polish version"></input></span>
            <span className="example">
                <input id="example" type="text" placeholder="Example of use"></input>
                <input className="saveBtn" type="submit" value="+"></input>
            </span>
        </form>
    )
}
