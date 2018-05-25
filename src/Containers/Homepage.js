import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../Actions/LoginAction'

class Homepage extends React.Component {
  constructor(props) {
    super(props)

    this.updateState = this.updateState.bind(this)
  }
  updateState(e, string) {
    this.props.login({})
  }
  render() {
    const username = this.props.auth.data.username || null

    return (
      <div>
        <h2>Selamsss {username}</h2>
        <button onClick={this.updateState}>Bağa Tıkla</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login: login
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
