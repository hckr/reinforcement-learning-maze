import React from 'react';
import { Maze } from './Maze'

function App() {
  return (
    <Maze
      rows={50}
      cols={50}
      cellWidth={10}
      cellHeight={10}
      bgColor1='#ddf'
      bgColor2='#eef'
    />
  );
}

export default App;
