import React from "react";
import { Box } from 'grommet';

import JokeText from "./JokeText";
import JokePunch from "./JokePunch";

const Joke = (props) => (
	<article>
		<JokeText className="joke joke-text">
			<Box tag="div" width="100%">
				{props.text}
			</Box>
			<Box tag="div" margin={{ top: "0.5rem" }} width="100%">
				{props.punch}
			</Box>
		</JokeText>
	</article>
);

export default Joke;