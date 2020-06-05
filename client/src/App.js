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
      const data = await Promise.all(
        [
          this.getWord(),
          this.getPhrasal()
        ]
      )
      const [word, phrasal] = data
      this.setState({ word, phrasal })
    } catch (err) {
      console.log(`refresh word error: ${err}`)
      this.setState({
        phrasal: {
          en: "english phrasal",
          pl: "polish phrasal",
          example: "example of phrasal"
        },
        word: {
          en: "word phrasal",
          pl: "word phrasal",
          explanation: "explanation of phrasal",
          definition: "def"
        }
      })
    }
  }

  getWord = async () => {
    const res = await axios.get('/random/word')
    return res;
  }

  getPhrasal = async () => {
    const res = await axios.get('/random/phrasal')
    return res;
  }


  editViewHandler = (event) => {
    console.log(`event = ${event}\ntarget = ${event.target}`)
  }

  render() {
    return (
      <div class="App">
        <Nav editViewHandler={() => console.log("Jestem kurwa")} />
        <Main phrasal={this.state.phrasal} word={this.state.word}></Main>
      </div>
    )
  }
}
