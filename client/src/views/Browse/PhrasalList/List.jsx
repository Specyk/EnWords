import React, { useState } from 'react'
import AddNew from './AddNew'

export default function List(props) {
    const [isAdding, setIsAdding] = useState()

    const switchAddForm = e => isAdding ? setIsAdding(false) : setIsAdding(true)
    const renderAddNew = () => isAdding ? <li><AddNew /></li> : ""

    const createPhrasalEntry = phrasal =>
        <li>
            <span className="pl">{phrasal.pl}</span>
            <span className="en">{phrasal.en}</span>
            <span className="example">{phrasal.example}</span>
        </li>

    return (
        <ul>
            <li>
                <span className="pl">Polish</span>
                <span className="en">English</span>
                <span className="example">
                    <span>Example</span>
                    <span className="addNewBtn" onClick={switchAddForm} type="button">Add new</span>
                </span>
            </li>
            {renderAddNew()}
            {props.phrasals.map(createPhrasalEntry)}
        </ul>
    )
}
