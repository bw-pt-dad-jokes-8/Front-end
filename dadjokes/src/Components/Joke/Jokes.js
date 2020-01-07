import React from "react";
import { Box } from 'grommet';

import Joke from "./Joke";

export default function Jokes(props) {

	const jokesList = props.items;
	console.log("items", jokesList);

	return (
		<Box direction='row' flex overflow="auto" className="main" pad="0">
			<Box flex align='center' justify='center' pad="0">
				{jokesList.map(item => (
					<Joke text={item.joke} punch={item.punch} key={item.id} />
				))}
			</Box>
		</Box>
	);
};
