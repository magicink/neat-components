// @flow
import {autobind} from 'core-decorators'
import createBrowserHistory from 'history/createBrowserHistory'
import React from 'react'
import {Route, Router} from 'react-router'
import { TableOfContents } from './TableOfContents'
import { GridMedia } from './GridMedia'

const history = createBrowserHistory()

@autobind
export class App extends React.Component {
  render () {
    return <Router history={history}>
      <div>
        <Route exact path={'/'} component={TableOfContents} />
        <Route exact path={'/grid-media'} component={GridMedia} />
      </div>
    </Router>
  }
}