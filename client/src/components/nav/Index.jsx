import React from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import '../../App.css'

export default function Nav(props) {
    const location = useLocation()
    const renderMenuLink = ({ path, label, items }) => {
        const isActive = location.pathname === path
        const resultLinkEl = items ? <Dropdown className='' path={path} items={items}>{label}</Dropdown> : renderSimpleLink({ path, label, isActive })
        return resultLinkEl
    }

    const renderSimpleLink = ({ path, label, isActive }) => (
        <li key={path} className={`${isActive ? 'active' : ''}`}>
            <Link to={path}>{label}</Link>
        </li>)

    const globalLinks = [
        { path: '/', label: 'Learn' },
        {
            path: '/browse', label: 'Browse',
            items: [
                { path: '/browse/words', label: 'Words' },
                { path: '/browse/phrasals', label: 'Phrasals' }
            ]
        },
        { path: '/settings', label: 'Settings' },
    ]

    return (
        <div className="Nav">
            <ul className="global">
                {globalLinks.map(link => renderMenuLink(link))}
            </ul>
            <ul className="local">
                <li>Refresh</li>
                <li>Speech</li>
            </ul>
        </div>
    )
}
