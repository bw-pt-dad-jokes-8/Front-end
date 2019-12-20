import React from "react";
import { Box } from 'grommet';

import Joke from "./Joke";

const Jokes = (props) => (
	<Box direction='row' flex overflow="auto" className="main">
		<Box flex align='center' justify='center'>
			<Joke text="What is a witch's favorite subject in school?" punch="Spelling" />
			<Joke text="What did one wall say to the other wall?" punch="I'll meet you at the corner!" />
			<Joke text="What is a tornado's favorite game to play?" punch="Twister!" />
		</Box>
	</Box>
);

export default Jokes;