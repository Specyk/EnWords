import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="SearchBox">
            <form onSubmit={props.searchHandler}>
                <input id="searchText" type="text"></input>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    )
}
