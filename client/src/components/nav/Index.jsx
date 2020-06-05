import React from 'react'
import TreeItem from './TreeItem'
import '../../App.css'

export default function Nav(props) {
    const refreshOptions = ["all", "phrasal", "word"]
    const speechOptions = ["on", "off"]
    return (
        <div className="Nav">
            <ul>
                <li><span>Settings</span></li>
                <li><TreeItem editViewHandler={props.editViewHandler} items={refreshOptions}>Refresh</TreeItem></li>
                <li><TreeItem editViewHandler={props.editViewHandler} items={speechOptions}>Speech</TreeItem></li>
            </ul>
        </div>
    )
}
