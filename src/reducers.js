import { SELECT_CELL, CLEAR_GRID, BUMP_GRID } from './actions'

let nextId = 0

const getNextId = () => nextId++

const makeCell = (cell) => {
  const defaults = { id: getNextId(), selected: false }
  return { ...defaults, ...cell }
}

const makeCells = (n) => {
  const cells = {}
  for (let i = 0; i < n; i++) {
    cells[i] = makeCell()
  }
  return cells
}

// First pass at grid makers
// const makeArray = n => [...Array(n).keys()]
// const makeRow = n => this.makeArray(n).map(cell => this.makeCell())
// const makeGrid = n => this.makeArray(n).map(row => this.makeRow(n))

// TODO: Don't hardcode the initial grid IDs
const intialState = {
  cellSize: '20px',
  cells: makeCells(9),
  grid: [
    [0, 1, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
}

const reducer = (state = intialState, action) => {

  const { type } = action

  if (type === SELECT_CELL) {

    const { cell } = action
    const { cells } = state

    const newCell = { ...cell, selected: !cell.selected }
    const newCells = { ...cells, ...{ [cell.id]: newCell } }
    const newState = { ...state, cells: newCells }

    return newState

  } else if (type === CLEAR_GRID) {

    const { cells } = state
    const newCells = {}

    Object
      .entries(cells)
      .map(([id, cell]) =>
        newCells[id] = { ...cell, selected: false }
      )

    const newState = { ...state, cells: newCells }

    return newState

  } else if (type === BUMP_GRID) {

    const { amount } = action
    const { grid, cells } = state

    // Note: Not the best way to add/remove cells to/from  state - Begs the question, is the state structured correctly

    if (amount === 1) {

      const newGrid = []
      const newCells = { ...cells }

      // New cells per exist row
      grid.forEach(row => {
        const newCell = makeCell()
        newCells[newCell.id] = newCell
        newGrid.push([...row, newCell.id])
      })

      // New row
      const newRow = Array.from(newGrid[0]).map(id => {
        // Hmmm: Side-effects in a mapping?!
        const newCell = makeCell()
        newCells[newCell.id] = newCell
        return newCell.id
      })

      newGrid.push(newRow)

      const newState = { ...state, grid: newGrid, cells: newCells }

      return newState

    } else if (amount === -1) {

      // Remove the last row
      let newGrid = grid.slice(0, -1)

      // Remove the last item from each remaining row
      newGrid = newGrid.map(row => row.slice(0, -1))

      // TODO: Remove unused cells
      const newCells = { ...cells }

      const newState = { ...state, cells: newCells, grid: newGrid }

      return newState

    }

  }

  return state
}

export default reducer
