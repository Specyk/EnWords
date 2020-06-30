import React, { useState } from 'react'
import axios from 'axios'
import AddNew from './AddNew'

export default function List(props) {
    const [isAdding, setIsAdding] = useState()

    const switchAddForm = e => isAdding ? setIsAdding(false) : setIsAdding(true)
    const renderAddNew = () => isAdding ? <li><AddNew /></li> : ""

    const removeWord = id => {
        axios.delete(`/api/words/${id}`)
            .then(() => props.loadWordsFn())
            .then(() => console.log(`Word ${id} has been deleted`))
    }


    const createWordEntry = word =>
        <li className="entry">
            <span className="pl">{word.pl}</span>
            <span className="en">{word.en}</span>
            <span className="definition">{word.definition}</span>
            <span className="example">{word.example}</span>
            <span onClick={() => removeWord(word._id)}>X</span>

        </li>

    return (
        <ul>
            <li>
                <span className="pl">Polish</span>
                <span className="en">English</span>
                <span className="definition">Definition</span>
                <span className="example">
                    <span>Example</span>
                    <span className="addNewBtn" onClick={switchAddForm} type="button">Add new</span>
                </span>
            </li>
            {renderAddNew()}
            {props.words.map(createWordEntry)}
        </ul>
    )
}
