import React from 'react'
import Cell from './Cell'

const Row = ({ row, handleCellClick }) => (
  <div className="row">
    {
      row.map((cell, index) =>
        <Cell key={ index } cell={ cell } handleClick={ handleCellClick } />
      )
    }
  </div>
)

export default Row
