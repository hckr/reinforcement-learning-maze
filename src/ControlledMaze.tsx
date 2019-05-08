import { RootState } from './store/rootReducer';
import { connect } from 'react-redux';
import { Maze } from './Maze'

export const ControlledMaze = connect(
  ({ maze }: RootState) => ({
    cellWidth: maze.cellSize,
    cellHeight: maze.cellSize,
  })
)(Maze)
