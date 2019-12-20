import './css/App.css';

import React from 'react';
import {  Route } from "react-router-dom";

import { Grommet, Header, Heading, Button, Menu, Box } from 'grommet';

import Branding from "./components/Branding/Branding";
import Entry from "./components/Entry/Entry";
import Jokes from "./components/Joke/Jokes";

import theme from "./components/Styles/Theme";

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
