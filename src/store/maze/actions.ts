import { actionCreatorFactory } from 'typescript-fsa'

const action = actionCreatorFactory('MAZE');

export const setCellSize = action<number>('SET_CELL_SIZE');
