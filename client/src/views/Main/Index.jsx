import React from 'react'
import Phrasal from './Phrasal'
import Word from './Word'
import '../../App.css'

export default function Main({ phrasal, word }) {
    return (
        <div className="Main">
            <Phrasal data={phrasal} />
            <Word data={word} />
        </div>
    )
}
