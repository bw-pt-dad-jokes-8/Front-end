import React from "react";
import { Box, Header } from 'grommet';

const BrandingBar = (props) => (
  <Header
    tag='header'
    direction='row'
    background='light'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

export default BrandingBar;