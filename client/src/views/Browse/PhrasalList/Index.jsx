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
        this.update().then(() => { })
    }

    update = async () => {
        const phrasals = await this.getPhrasals()
        this.setState({ phrasals })
    }

    getPhrasals = async () => {
        const res = await axios.get('/api/phrasals')
        return res.data
    }

    addNewHandler() {

    }

    searchHandler() {

    }

    render() {
        return (
            <div>
                <AddNew addNewHandler={this.addNewHandler}></AddNew>
                <SearchBox searchHandler={this.searchHandler}></SearchBox>
                <List phrasals={this.state.phrasals}></List>
            </div >
        )
    }
}
