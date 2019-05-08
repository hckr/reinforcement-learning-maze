import { MazeState, mazeReducer } from './maze/reducer';
import { combineReducers } from 'redux';

export interface RootState {
    maze: MazeState
}

export const rootReducer =
  combineReducers<RootState>({
    maze: mazeReducer
  })
