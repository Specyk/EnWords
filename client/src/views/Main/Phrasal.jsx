import React from 'react'

export default function Phrasal({ data }) {
    return (
        <div className="Phrasal">
            <div className="expression">
                <div className="en">{data.en}</div>
                <div className="pl">{data.pl}</div>
            </div>
            <div className="example">{data.example}</div>
        </div>
    )
}
