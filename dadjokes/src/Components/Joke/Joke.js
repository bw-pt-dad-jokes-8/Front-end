import React from "react";
import { Box } from 'grommet';

import JokeText from "./JokeText";
import JokePunch from "./JokePunch";

const Joke = (props) => (
	<article>
		<JokeText className="joke joke-text">
			<Box tag="div">
				{props.text}
			</Box>
			<Box tag="div">
				{props.punch}
			</Box>
		</JokeText>
	</article>
);

export default Joke;