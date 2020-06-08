import React, { Component } from 'react'

import PhrasalList from './PhrasalList/Index'
import WordList from './WordList/Index'

export default class BrowseView extends Component {
    state = {
    }
    render() {
        return (
            <div className='BrowseView'>
                <PhrasalList></PhrasalList>
                <WordList></WordList>
            </div>
        )
    }
}
