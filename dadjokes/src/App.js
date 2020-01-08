import './css/App.css';

import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
import { Grommet } from 'grommet';

import Dashboard from "./Components/Users/Dashboard.js";
import Branding from "./Components/Branding/Branding";
import Entry from "./Components/Entry/Entry";
import Dash from "./Components/Dash/Dash";
import JokesList from "./Components/Joke/JokesList";
import EntryRegister from "./Components/Entry/EntryRegister";
import EntryLogin from "./Components/Entry/EntryLogin";

import theme from "./Components/Styles/Theme";

// import data from "./Data/Data"

function App() {

  // const [farce, setFarce] = useState(data);
  const [farce, setFarce] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(farce);

  useEffect(() =>{
    axios
      .get("https://dad-jokes-8.herokuapp.com/api/jokes")
      .then(response => {
        console.log("Jokes", response.data.jokes);
        setFarce(response.data.jokes);
        setSearchTerm(" ");
      })
      .catch(error => {
        console.log("Sorry", error);
      });
  }, []);

  useEffect(() => {
    const results = farce.filter(item => {
      return item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log("Results:", results);

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Grommet theme={theme}>
      <Branding setSearchTerm={setSearchTerm} />
      <Route
        exact path="/"
        render={routeProps => {
          return <JokesList {...routeProps} items={searchResults} />
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
      <Route exact path='/dashboard' component={Dashboard}/>
    {/*  /!* <Route path='/dashboard'*/}
    {/*  render= {routeProps =>{*/}
    {/*  return <Dashboard {...routeProps}/>*/}
    {/*}}/> *!/*/}
      { localStorage.getItem('token') ? (
         <Dash />
        ) : (
        <Entry />
      )}

    </Grommet>
  );
}

export default App;
