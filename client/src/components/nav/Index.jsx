import React from 'react'
import TreeItem from './TreeItem'
import '../../App.css'

export default function Nav(props) {
    const refreshOptions = ["all", "phrasal", "word"]
    const speechOptions = ["on", "off"]
    return (
        <div className="Nav">
            <span><span>Settings</span></span>
            <span><TreeItem editViewHandler={props.editViewHandler} items={refreshOptions}>Refresh</TreeItem></span>
            <span><TreeItem editViewHandler={props.editViewHandler} items={speechOptions}>Speech</TreeItem></span>
        </div>
    )
}
