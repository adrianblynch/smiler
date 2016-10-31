import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from './Grid'
import { clearGrid, bumpGrid } from './actions'
import { getGrid } from './selectors'
import './App.css'

class App extends Component {

  constructor(props) {

    super(props)

    this.nextId = 0;
    this.gridSize = 10
  }

  render() {

    const { grid, clearGrid, gridPlusOne, gridMinusOne } = this.props

    return (
      <div className="app">
        <Grid grid={ grid } />
        <div className="actions-bar">
          <button onClick={ gridPlusOne }>Grid +1</button>
          <button onClick={ gridMinusOne }>Grid -1</button>
          <button onClick={ clearGrid }>Clear grid</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  grid: getGrid(state)
})

const mapDispatchToProps = (dispatch) => ({
  clearGrid: () => dispatch(clearGrid()),
  gridPlusOne: () => dispatch(bumpGrid(1)),
  gridMinusOne: () => dispatch(bumpGrid(-1))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
