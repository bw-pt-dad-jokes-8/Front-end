import React, { useState } from "react";
import { Box } from 'grommet';

import JokeText from "./JokeText";

export default function Joke(props) {

	const [showJoke, setShowJoke] = useState(false);

	return (
		<article>
			<JokeText className="joke joke-text">
				<Box tag="div" width="100%" pad="medium" onClick={() => setShowJoke(showJoke => !showJoke)}>
					{props.text}
				</Box>
				{showJoke &&
					<Box tag="div" margin={{top: "0.5rem"}} width="100%" pad="medium" primary>
						{props.punch}
					</Box>
				}
			</JokeText>
		</article>
	)
}