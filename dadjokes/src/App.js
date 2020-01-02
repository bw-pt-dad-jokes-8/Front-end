import './css/App.css';

import React, { useState } from 'react';
import { Route } from "react-router-dom";

import { Grommet } from 'grommet';

import Branding from "./Components/Branding/Branding";
import Entry from "./Components/Entry/Entry";
import Jokes from "./Components/Joke/Jokes";
import EntryRegister from "./Components/Entry/EntryRegister";
import EntryLogin from "./Components/Entry/EntryLogin";

import theme from "./Components/Styles/Theme";

import data from "./Data/Data"

function App() {

  const [farce, setFarce] = useState(data);

  return (
    <Grommet theme={theme}>
      <Branding />
      <Route
        exact path="/"
        render={routeProps => {
          return <Jokes {...routeProps} items={farce} />
        }}
      />
      <Route
        exact path="/register"
        render={routeProps => {
          return <EntryRegister {...routeProps} />
        }}
      />
      <Route
        exact path="/login"
        render={routeProps => {
          return <EntryLogin {...routeProps} />
        }}
      />
      <Entry />
    </Grommet>
  );
}

export default App;
