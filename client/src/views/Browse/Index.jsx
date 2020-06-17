import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PhrasalList from './PhrasalList/Index'
import WordList from './WordList/Index'

export default class BrowseView extends Component {
    state = {
    }
    render() {
        return (
            <div className='BrowseView'>
                <Route path="/browse/phrasals">
                    <PhrasalList></PhrasalList>
                </Route>
                <Route path="/browse/words">
                    <WordList></WordList>
                </Route>
            </div>
        )
    }
}
