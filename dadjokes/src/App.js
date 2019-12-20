import './css/App.css';

import React from 'react';
import {  Route } from "react-router-dom";

import { Grommet } from 'grommet';

import Branding from "./Components/Branding/Branding";
import Entry from "./Components/Entry/Entry";
import Jokes from "./Components/Joke/Jokes";

import theme from "./Components/Styles/Theme";

function App() {


  return (
    <Grommet theme={theme}>
      <Branding />
      <Route exact path="/" component={Jokes} />
      <Entry />
    </Grommet>
  );
}

export default App;
