import React from "react";
import { Box } from 'grommet';

import Joke from "./Joke";

export default function Jokes(props) {

	const jokesList = props.items;
	console.log("items", jokesList);

	return (
		<Box direction='row' flex overflow="auto" className="main">
			<Box flex align='center' justify='center'>
				{jokesList.map(item => (
					<Joke text={item.joke} punch={item.punch} />
				))}
			</Box>
		</Box>
	);
};
