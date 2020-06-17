import React, { Component } from 'react'
import axios from 'axios'

import SearchBox from '../SearchBox'
import AddNew from './AddNew'
import List from './List'

export default class WordList extends Component {
    state = {
        words: []
    }

    componentDidMount() {
        this.update().then(() => { })
    }

    update = async () => {
        const words = await this.getWords()
        this.setState({ words })
    }

    getWords = async () => {
        const res = await axios.get('/api/words')
        return res.data
    }

    addNewHandler = () => {

    }

    searchHandler = () => {

    }

    render() {
        return (
            <div>
                <SearchBox searchHandler={this.searchHandler}></SearchBox>
                <List words={this.state.words} addNewHandler={this.addNewHandler}></List>
            </div >
        )
    }
}
