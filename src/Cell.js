import React from 'react';
import classNames from 'classnames'
import { connect } from 'react-redux'
import { selectCell } from './actions'
import { getCellSize } from './selectors'

const Cell = ({ cell, cellSize, onSelectCell }) => {

  const cellClass = classNames({
    'cell': true,
    'cell--selected': cell.selected
  })

  return (
    <div
      className={ cellClass }
      style={ { width: cellSize, height: cellSize } }
      onClick={ () => onSelectCell(cell) }
    />
  )
}

const mapStateToProps = (state) => ({
  cellSize: getCellSize(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSelectCell: (cell) => dispatch(selectCell(cell))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
