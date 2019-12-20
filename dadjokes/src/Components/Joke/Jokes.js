import React from "react";
import { Box } from 'grommet';

import Joke from "./Joke";

const Jokes = (props) => (
	<Box direction='row' flex overflow={{ horizontal: 'hidden' }} className="main">
		<Box flex align='center' justify='center'>
			<Joke />
		</Box>
	</Box>
);

export default Jokes;