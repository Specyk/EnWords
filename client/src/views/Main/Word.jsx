import React from 'react'

export default function Word({ data }) {
    return (
        <div className="Word">
            <div className="word">
                <div className="en">{data.en}</div>
                <div className="pl">{data.pl}</div>
            </div>
            <div className="definition">{data.definition}</div>
            <div className="example">{data.example}</div>
        </div>
    )
}
