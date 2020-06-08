import React from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'
import TreeItem from './TreeItem'
import '../../App.css'

export default function Nav(props) {
    const location = useLocation()
    const renderMenuLink = ({ path, label }) => {
        const isActive = location.pathname === path
        return (
            <li key={path} className={`${isActive ? 'active' : ''}`}>
                <Link to={path}>{label}</Link>
            </li>
        )
    }

    const globalLinks = [
        { path: '/', label: 'Learn' },
        { path: '/browse', label: 'Browse' },
        { path: '/settings', label: 'Settings' },
    ]

    const refreshOptions = ["all", "phrasal", "word"]
    const speechOptions = ["on", "off"]
    return (
        <div className="Nav">
            <ul className="global">
                {globalLinks.map(link => renderMenuLink(link))}
            </ul>
            <ul className="local">
                <li><TreeItem editViewHandler={props.editViewHandler} items={refreshOptions}>Refresh</TreeItem></li>
                <li><TreeItem editViewHandler={props.editViewHandler} items={speechOptions}>Speech</TreeItem></li>
            </ul>
        </div>
    )
}
