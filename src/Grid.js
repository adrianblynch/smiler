import React from 'react'
import Row from './Row'

const Grid = ({ grid, handleCellClick }) => (
  <div className="grid">
    {
      grid.map((row, index) =>
        <Row key={ index } row={ row } handleCellClick={ handleCellClick } />
      )
    }
  </div>
)

export default Grid
