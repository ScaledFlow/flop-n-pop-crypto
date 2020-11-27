import React from 'react';

// import styled from 'styled-components';

import './App.css';
// import WelcomeMessage from '../Settings/WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
// import AppProvider from './AppProvider';
import Settings from '../Settings';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
        {/* <WelcomeMessage /> */}
      </AppProvider>
    </AppLayout>
  );
}

console.log(React.version);

export default App;
