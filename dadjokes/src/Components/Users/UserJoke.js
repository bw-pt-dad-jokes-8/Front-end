import React from "react";
import { Box, Button } from 'grommet';

import JokeText from "../Joke/JokeText";

const UserJoke = (props) => (
	<article>
		<JokeText className="joke joke-text">

			<Box tag="div" width="100%">
				{props.text}
			</Box>
			<Box tag="div" margin={{ top: "1rem" }} width="100%">
				{props.punch}
			</Box>
			<Box>
				<Button />
			</Box>
			<Box>
				<Button />
			</Box>
		</JokeText>
	</article>
);

export default UserJoke;