import React, { Component } from 'react'
import axios from 'axios'

import SearchBox from '../SearchBox'
import List from './List'

export default class WordList extends Component {
    state = {
        words: []
    }

    componentDidMount() {
        this.loadWords().then(() => { })
    }

    loadWords = async () => {
        const words = await this.getWords()
        this.setState({ words, filteredWords: null })
    }

    getWords = async () => {
        const res = await axios.get('/api/words')
        return res.data
    }

    addNewHandler = () => {

    }

    searchHandler = (e) => {
        const phrase = e.target.value
        const entryFilter = entry => entry.en.indexOf(phrase) > -1 || entry.pl.indexOf(phrase) > -1 || entry.example.indexOf(phrase) > -1 || entry.definition.indexOf(phrase) > -1
        const filtered = this.state.words.filter(entryFilter)
        this.setState({ filteredWords: filtered })
    }

    render() {
        return (
            <div>
                <SearchBox searchHandler={this.searchHandler}></SearchBox>
                <List loadWordsFn={this.loadWords} words={this.state.filteredWords || this.state.words} addNewHandler={this.addNewHandler}></List>
            </div >
        )
    }
}
