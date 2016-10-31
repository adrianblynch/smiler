export const getGrid = (state) => {
  const { grid, cells } = state
  return grid.map(row => row.map(cellId => cells[cellId]))
}

export const getCellSize = (state) => {
  return state.cellSize
}
