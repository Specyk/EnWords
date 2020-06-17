import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown(props) {
    const [expanded, setExpanded] = useState(false)
    const onMouseOverHandler = () => setExpanded(true)
    const onMouseOutHandler = () => setExpanded(false)
    const renderTree = () => <div className={expanded ? "content" : "hidden content"}>
        {props.items.map((item) => <Link className='linkItem' to={item.path}>{item.label}</Link>)}
    </div>

    return (
        <li className="Dropdown" onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
            <div className="toogle">
                {props.children}
            </div>
            {renderTree()}
        </li>
    )
}
