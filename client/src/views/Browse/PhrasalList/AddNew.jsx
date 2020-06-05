import React from 'react'

export default function AddNew(props) {
    return (
        <div>
            <form onSubmit={props.handleSAddPhrasal}>
                <input id="en" type="text"></input>
                <input id="pl" type="text"></input>
                <input id="example" type="text"></input>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}
