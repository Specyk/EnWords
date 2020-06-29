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

    searchHandler() {

    }

    render() {
        return (
            <div>
                <SearchBox searchHandler={this.searchHandler}></SearchBox>
                <List loadPhrasalsFn={this.loadPhrasals} phrasals={this.state.phrasals} addNewHandler={this.addNewHandler}></List>
            </div >
        )
    }
}
