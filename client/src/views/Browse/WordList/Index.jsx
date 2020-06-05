import React, { Componet } from 'react'
import SearchBox from '../searchbox'
import AddNew from './add_new'
import List from './list'


export default class WordList extends Componet {
    addNewHandler() {

    }

    searchHandler() {

    }

    render() {
        return (
            <div>
                <SearchBox searchHandler={searchHandler}></SearchBox>
                <AddNew addNewHandler={addNewHandler}></AddNew>
                <List words={this.props.words}></List>
            </div >
        )
    }
}
