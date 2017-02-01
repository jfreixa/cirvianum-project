import React from 'react'
import ReactDOM from 'react-dom'
import { Landing, GamesPage, GamePage } from './containers'
import './main.css'
import 'normalize.css'
import { Router, Route, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

const NoMatch = () => (
  <div>No encontrado</div>
)

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path='/' component={Landing} />
      <Route path='game' component={GamesPage} />
      <Route path='game/1' component={GamePage} />
      <Route path='*' component={NoMatch} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
)
