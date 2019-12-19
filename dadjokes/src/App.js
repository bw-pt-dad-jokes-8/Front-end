import './css/App.css';

import React from 'react';
import { Grommet, Header, Button, Menu, Box } from 'grommet';

import AppBar from "./components/Styles/AppBar";

function App() {
  return (
    <Grommet plain>
      <AppBar className="appbar">
        <h1>
          Old Man Farce!
        </h1>
      </AppBar>
    </Grommet>
  );
}

export default App;
