import React from 'react'
import { Switch, Route } from 'react-router'

import Homepage from '../Containers/Homepage'

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    )
  }
}
