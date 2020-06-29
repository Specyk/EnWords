import React, { useState } from 'react'
import axios from 'axios'

export default function AddNew(props) {
    const addNewHandler = (e) => {
        e.preventDefault()
        axios.post('/api/phrasals', { en, pl, example })
            .then(() => console.log("Sent!"))
    }

    const [en, setEn] = useState('')
    const [pl, setPl] = useState('')
    const [example, setExample] = useState('')

    return (
        <form className="AddNew" onSubmit={addNewHandler}>
            <span className="en"><input onChange={e => setEn(e.target.value)} id="en" type="text" placeholder="English version"></input></span>
            <span className="pl"><input onChange={e => setPl(e.target.value)} id="pl" type="text" placeholder="Polish version"></input></span>
            <span className="example">
                <input onChange={e => setExample(e.target.value)} id="example" type="text" placeholder="Example of use"></input>
                <input className="saveBtn" type="submit" value="+"></input>
            </span>
        </form>
    )
}
