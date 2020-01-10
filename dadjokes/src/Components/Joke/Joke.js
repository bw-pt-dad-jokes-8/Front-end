import React, { useState } from "react";
import { Box } from 'grommet';

import JokeText from "./JokeText";

export default function Joke(props) {

	const [showJoke, setShowJoke] = useState(false);

	return (
		<article>
			<JokeText className="joke joke-text">
				<Box
					tag="div"
					width="100%"
					pad="large"
					background="#e7e7e7"
					onClick={() => setShowJoke(showJoke => !showJoke)}
				>
					{props.text}
				</Box>
				{showJoke &&
					<Box
						tag="div"
						width="100%"
						pad="large"
						background="#2E7FD6"
					>
						{props.punch}
					</Box>
				}
			</JokeText>
		</article>
	)
}