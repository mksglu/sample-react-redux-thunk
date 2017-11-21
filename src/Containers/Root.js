import React from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import store from '../Store'
import Routes from '../Router'

const history = createHashHistory()

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes/>
        </Router>
      </Provider>
    )
  }
}
