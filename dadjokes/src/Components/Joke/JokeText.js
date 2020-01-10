import React from "react";
import { Box } from 'grommet';

const JokeText = (props) => (
		<Box
			tag="div"
			border={[
				{ color: 'lightShade', size: 'medium', side: 'top' },
				{ color: 'lightShade', size: 'medium', side: 'right' },
				{ color: 'lightShade', size: 'medium', side: 'left' },
				{ color: 'lightShade', size: 'medium', side: 'bottom' }
			]}
			direction='column'
			align="center"
			justify="center"
			flex
			// overflow={{ horizontal: 'hidden' }}
			// pad="medium"
			height="auto"
			margin={{
				"top": "1%",
				"bottom": "1%",
				"left": "2%",
				"right": "2%"
			}}
			round={{ corner: "top", size: "0" }}
			width="96%"
			{...props}
		/>
	);

export default JokeText;