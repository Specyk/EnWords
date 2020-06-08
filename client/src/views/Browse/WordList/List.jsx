import React from 'react'

export default function List(props) {
    return (
        <ul>
            <li>
                <span className="pl">Polish</span>
                <span className="en">English</span>
                <span className="explanation">Explanation</span>
                <span className="example">Example</span>
            </li>
            {props.words.map(i =>
                <li>
                    <span className="pl">{i.pl}</span>
                    <span className="en">{i.en}</span>
                    <span className="explanation">{i.definition}</span>
                    <span className="example">{i.example}</span>
                </li>
            )}
        </ul>
    )
}
