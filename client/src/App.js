import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Nav from './components/nav/Index'
import Main from './views/Main/Index'
import Browse from './views/Browse/Index'
import Settings from './views/Settings'

export default class App extends Component {
  state = {
    phrasal: { en: "coś tam en" },
    word: { en: "coś tam en" }
  }

  async componentDidMount() {
    await this.refresh()
  }

  refresh = async () => {
    try {
      const responses = await Promise.all(
        [
          this.getWord(),
          this.getPhrasal()
        ]
      )
      const [word, phrasal] = responses.map(r => r.data)

      this.setState({ word, phrasal })
    } catch (err) {
      console.log(`refresh word error: ${err}`)
    }
  }

  getWord = async () => {
    const res = await axios.get('/api/words/random')
    return res;
  }

  getPhrasal = async () => {
    const res = await axios.get('/api/phrasals/random')
    return res;
  }


  editViewHandler = (e) => {
    console.log(`event = ${e}\ntarget = ${e.target}`)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav editViewHandler={() => console.log("Jestem kurwa")} />
          <Switch>
            <Route path="/" exact>
              <Main word={this.state.word} phrasal={this.state.phrasal} />
            </Route>
            <Route path="/settings">
              <Settings></Settings>
            </Route>
            <Route path="/browse">
              <Browse></Browse>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
