export const SELECT_CELL = 'SELECT_CELL'
export const CLEAR_GRID = 'CLEAR_GRID'
export const BUMP_GRID = 'BUMP_GRID'

export const selectCell = (cell) => ({
	type: SELECT_CELL,
	cell
})

export const clearGrid = () => ({
	type: CLEAR_GRID
})

export const bumpGrid = (amount) => ({
	type: BUMP_GRID,
	amount
})
