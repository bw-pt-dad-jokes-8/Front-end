import React from "react";
import { Box, Grommet } from 'grommet';

const Main = (props) => (
 <Box direction='row' flex overflow={{ horizontal: 'hidden' }} className="main">
	 <Box flex align='center' justify='center'>
			app body
	 </Box>
 </Box>
);

export default Main;