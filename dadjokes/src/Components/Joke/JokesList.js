import React from "react";
import { Box } from 'grommet';

import Joke from "./Joke";

export default function JokesList(props) {

	const jokesList = props.items;
	console.log("Jokes List", jokesList);

	return (
		<Box direction='row' flex overflow="auto" className="main" pad="0" >
			<Box className="jokes-list" flex align='center' justify='center' pad="0">
				{jokesList.map(item => {
						return <Joke text={item.question} punch={item.answer} key={item.id} />
					})
				}
			</Box>
		</Box>
	);
};
