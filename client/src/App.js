import React, { Component } from 'react'
import axios from 'axios'

import Nav from './components/nav/Index'
import Main from './views/Main/Index'

export default class App extends Component {
  state = {
    phrasal: {},
    word: {}
  }

  async componentDidMount() {
    await this.refresh()
  }

  refresh = async () => {
    try {
      const [word, phrasal] = await Promise.all(
        [
          this.getWord(),
          this.getPhrasal()
        ]
      )
      this.setState({ word, phrasal })
    } catch (err) {
      console.log(`refresh word error: ${err}`)
    }
  }

  getWord = async () => {
    const res = await axios.get('/api/random/word')
    return res;
  }

  getPhrasal = async () => {
    const res = await axios.get('/api/random/phrasal')
    return res;
  }


  editViewHandler = (event) => {
    console.log(`event = ${event}\ntarget = ${event.target}`)
  }

  render() {
    return (
      <div className="App">
        <Nav editViewHandler={() => console.log("Jestem kurwa")} />
        <Main phrasal={this.state.phrasal} word={this.state.word}></Main>
      </div>
    )
  }
}
