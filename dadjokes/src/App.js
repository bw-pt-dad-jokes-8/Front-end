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
// import UpdateJoke from "./Components/Joke/UpdateJoke";

import theme from "./Components/Styles/Theme";
import FormikUpdateJokeForm from './Components/Joke/UpdateJokeForm';


// import data from "./Data/Data"

function App() {

  // const [farce, setFarce] = useState(data);
  const [farce, setFarce] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [searchResults, setSearchResults] = useState(farce);
  // const [jokeId, setJokeId] = useState(farce)
 const [joke, setJoke] = useState({
   id: null,
   question: "",
   answer: "",
   status: "",
   isEditing: false,
 });

  const populateJoke =({id, question, answer, status}) =>{
    setJoke({id, question, answer, status, isEditing:true})
  };

  useEffect(() =>{
    axios
      .get("https://dad-jokes-8.herokuapp.com/api/jokes")
      .then(response => {
        // console.log("Response", Object.values(response.data.jokes));
        setFarce(response.data.jokes);
        // setSearchResults(response.data.jokes);
        setSearchTerm("");
      })
      .catch(error => {
        console.log("Sorry", error);
      });
  }, []);
    // const jokeIds = farce
  

  useEffect(() => {
    const results = farce.filter(item => {
      //console.log("id",item.id);
      return item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    setSearchResults(results);
  }, [searchTerm]);

//   const jokeId = Object.values(searchResults)
//   const objArr = jokeId.map(function(){
    
//  return [ jokeId[0]];
// });
//  console.log("Farce", objArr);
//  console.log("id",Object.values(objArr))

  // console.log("Search Results:", searchResults);
  //console.log("newState",ids);
  
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
      <Route exact path='/dashboard' 
      render ={ routeProps =>{
       return <Dashboard {...routeProps} farce= {farce} populateJoke={populateJoke}/>}}
       />
        <Route exact path='/update' 
      render ={ routeProps =>{
       return <FormikUpdateJokeForm {...routeProps} newState= {searchResults} joke={joke}/>}}
       />
      {/* <Route exact path='/update' component={FormikUpdateJokeForm}/> */}
      {/* <Route exact path='/add' component={JokeAdd} /> */}
    
      { localStorage.getItem('token') ? (
         <Dash />
        ) : (
        <Entry />
      )}
    </Grommet>
  );
}

export default App;
