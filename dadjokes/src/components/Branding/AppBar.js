import React from "react";
import { Box, Grommet } from 'grommet';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    background='light'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

export default AppBar;