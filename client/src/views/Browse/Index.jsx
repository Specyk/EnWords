import React, { Component } from './node_modules/react'

export default class BrowseView extends Component {
    state = {
        phrasals: [
            {
                pl: "polskie",
                en: "angielskie",
                example: "przykladowy phrasal"
            }
        ]
    }
    render() {
        return (
            <div>
                <PhrasalList phrasals={phrasals}></PhrasalList>
                <WordList words={words}></WordList>
            </div>
        )
    }
}
