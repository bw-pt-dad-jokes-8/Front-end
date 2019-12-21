import React from "react";
import { Header } from 'grommet';

const BrandingBar = (props) => (
  <Header
    tag='header'
    direction='row'
    background='light'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='small'
    style={{ zIndex: '1' }}
    {...props}
  />
);

export default BrandingBar;