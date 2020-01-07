import './css/App.css';

import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
import { Grommet } from 'grommet';

import Dashboard from "./Components/Dashboard";
import Branding from "./Components/Branding/Branding";
import Entry from "./Components/Entry/Entry";
import Dash from "./Components/Dash/Dash";
import JokesList from "./Components/Joke/JokesList";
import EntryRegister from "./Components/Entry/EntryRegister";
import EntryLogin from "./Components/Entry/EntryLogin";

import theme from "./Components/Styles/Theme";

import data from "./Data/Data"

function App() {

  // const [farce, setFarce] = useState(data);
  const [farce, setFarce] = useState([]);

  useEffect(() =>{
    axios
      .get("https://dad-jokes-8.herokuapp.com/api/jokes")
      .then(response => {
        console.log("Jokes", response.data.jokes);
        setFarce(response.data.jokes);
      })
      .catch(error => {
        console.log("Sorry", error);
      });
  });

  return (
    <Grommet theme={theme}>
      <Branding />
      <Route
        exact path="/"
        render={routeProps => {
          return <JokesList {...routeProps} items={farce} />
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
      <Route path='/dashboard' 
      render= {routeProps =>{
      return <Dashboard {...routeProps}/>
    }}/>
      { localStorage.getItem('token') ? (
         <Dash />
        ) : (
        <Entry />
      )}
    </Grommet>
  );
}

export default App;
