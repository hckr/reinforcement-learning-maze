import React from 'react';
import { connect } from 'react-redux';
import { RootState } from './store/rootReducer';
import { Dispatch } from 'redux';
import { setCellSize } from './store/maze/actions';

export interface ControlsComponentProps {
  cellSize: number
}

export interface ControlsComponentActions {
  setCellSize: (cellSize: number) => void
}

const ControlsComponent: React.FunctionComponent<ControlsComponentProps & ControlsComponentActions> =
  ({cellSize, setCellSize}) => (
    <>
      <input
        type="number"
        min={5}
        max={100}
        onChange={e => setCellSize(parseInt(e.target.value) || 0)}
        value={cellSize.toString()}
      />
    </>
  )

export const Controls = connect(
  ({ maze }: RootState): ControlsComponentProps => ({
    cellSize: maze.cellSize
  }),
  (dispatch: Dispatch): ControlsComponentActions => ({
    setCellSize: (cellSize: number) => dispatch(setCellSize(cellSize))
  })
)(ControlsComponent)
