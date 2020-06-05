import React from 'react'

export default function List(props) {
    return (
        <ul>
            {props.words.map(i =>
                <li>
                    <span className="pl"></span>
                    <span className="en"></span>
                    <span className="explanation"></span>
                </li>)}
        </ul>
    )
}
