import React from "react";
import { Box, Grommet } from 'grommet';

const Joke = (props) => (
	<Box
		border={{ color: 'lightShade', size: 'medium' }}
		direction='row'
		flex overflow={{ horizontal: 'hidden' }}
		pad="medium"
		margin="medium"
		round="small"
	>
		<article>
			Two peanuts were walking down the street. One was a salted.
		</article>
	</Box>
);

export default Joke;