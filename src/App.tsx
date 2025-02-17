import React from 'react';
import { Canvas } from './components/Canvas';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyles';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Canvas />
    </>
  );
}

export default App;