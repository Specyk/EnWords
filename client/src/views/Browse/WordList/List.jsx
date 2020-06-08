import React from 'react'

export default function List(props) {
    return (
        <ul>
            <li><span>Polish</span><span>English</span><span>Explanation</span><span>Example</span></li>
            {props.words.map(i =>
                <li>
                    <span className="pl">{i.pl}</span>
                    <span className="en">{i.en}</span>
                    <span className="explanation">{i.explanation}</span>
                    <span className="example">{i.example}</span>
                </li>
            )}
        </ul>
    )
}
