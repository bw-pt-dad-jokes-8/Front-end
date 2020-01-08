import React from "react";
import { Box } from 'grommet';

import JokeText from "./JokeText";
import JokePunch from "./JokePunch";

const Joke = (props) => (
	<article>
		<JokeText className="joke joke-text">
			{props.text}<br />
			{props.punch}
		</JokeText>
		{/*<JokePunch className="joke joke-punch">*/}
		{/*	{props.punch}*/}
		{/*</JokePunch>*/}
	</article>
);

export default Joke;