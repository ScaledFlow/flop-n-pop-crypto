import styled, { css } from 'styled-components';

import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';


function App() {
  return (
    <AppLayout className="App">
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
