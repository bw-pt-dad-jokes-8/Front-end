import React from 'react';
import './App.css';
import FormikLoginForm from './Components/login';
import FormikRegisterForm from './Components/register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormikLoginForm/>
        <FormikRegisterForm/>
      </header>
    </div>
  );
}

export default App;
