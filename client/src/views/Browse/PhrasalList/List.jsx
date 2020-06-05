import React from 'react'

export default function List(props) {
    return (
        <ul>
            {props.phrasals.map(i =>
                <li>
                    <span className="pl"></span>
                    <span className="en"></span>
                    <span className="example"></span>
                </li>)}
        </ul>
    )
}
