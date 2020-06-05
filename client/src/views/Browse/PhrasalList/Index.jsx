import React, { Component } from 'react'
import SearchBox from '../searchbox'
import AddNew from './add_new'
import List from './list'

export default class PhrasalList extends Component {
    addNewHandler() {

    }

    searchHandler() {

    }

    render() {
        return (
            <div>
                <SearchBox searchHandler={searchHandler}></SearchBox>
                <AddNew addNewHandler={addNewHandler}></AddNew>
                <List phrasals={props.phrasals}></List>
            </div >
        )
    }
}
