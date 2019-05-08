import React from 'react';
import { ControlledMaze } from './ControlledMaze'
import { Provider } from 'react-redux'
import { store } from './store/store';
import { Controls } from './Controls';


function App() {
  return (
    <Provider store={store}>
      <Controls />

      <ControlledMaze
        rows={20}
        cols={20}
        bgColor1='#ddf'
        bgColor2='#eef'
      />
    </Provider>
  );
}

export default App;
