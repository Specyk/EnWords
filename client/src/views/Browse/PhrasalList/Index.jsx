import React, { Component } from 'react'
import axios from 'axios'

import SearchBox from '../SearchBox'
import AddNew from './AddNew'
import List from './List'

export default class PhrasalList extends Component {
    state = {
        phrasals: []
    }

    componentDidMount() {
        this.loadPhrasals().then(() => { })
    }

    loadPhrasals = async () => {
        const phrasals = await this.getPhrasals()
        this.setState({ phrasals })
    }

    getPhrasals = async () => {
        const res = await axios.get('/api/phrasals')
        return res.data
    }

    addNewHandler = async (e) => {

        axios.post('/api/phrasals', {})
    }

    searchHandler = (e) => {
        const phrase = e.target.value
        const entryFilter = entry => entry.en.indexOf(phrase) > -1 || entry.pl.indexOf(phrase) > -1 || entry.example.indexOf(phrase) > -1
        const filtered = this.state.phrasals.filter(entryFilter)
        this.setState({ filteredPhrasals: filtered })
    }

    render() {
        return (
            <div>
                <SearchBox searchHandler={this.searchHandler}></SearchBox>
                <List loadPhrasalsFn={this.loadPhrasals} phrasals={this.state.filteredPhrasals || this.state.phrasals} addNewHandler={this.addNewHandler}></List>
            </div >
        )
    }
}
