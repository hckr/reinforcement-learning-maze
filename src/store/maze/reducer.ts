import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { setCellSize } from './actions';

export interface MazeState {
  cellSize: number
}

const initialState: MazeState = {
  cellSize: 40
}

export const mazeReducer = reducerWithInitialState(initialState)
  .case(
    setCellSize,
    (state, cellSize): MazeState => ({
      ...state,
      cellSize
    })
  )
