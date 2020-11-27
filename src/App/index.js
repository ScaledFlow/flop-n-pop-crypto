import React from 'react';

import './App.css';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
        <Content />
      </AppProvider>
    </AppLayout>
  );
}

console.log(React.version);

export default App;
