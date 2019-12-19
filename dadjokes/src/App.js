import React from 'react';
import { Grommet, Header, Button, Menu } from 'grommet';
import './css/App.css';

function App() {
  return (
    <Grommet plain>
      <Header>
        <Button hoverIndicator />
        {/*<Menu label="account" />*/}
      </Header>
    </Grommet>
  );
}

export default App;
