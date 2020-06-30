import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="SearchBox">
            <form>
                <input onChange={props.searchHandler} id="searchText" type="text"></input>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    )
}
