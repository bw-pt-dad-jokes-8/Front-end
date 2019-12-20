import React from "react";
import { Box } from 'grommet';

const Joke = (props) => (
	<>
		<Box
			tag="article"
			border={[
					{ color: 'lightShade', size: 'medium', side: 'top' },
					{ color: 'lightShade', size: 'medium', side: 'right' },
					{ color: 'lightShade', size: 'medium', side: 'left' },
					{ color: 'lightShade', size: 'small', side: 'bottom' }
				]}
			direction='row'
			align="center"
			justify="center"
			flex overflow={{ horizontal: 'hidden' }}
			pad="medium"
			margin={{
				"top": "1%",
				"bottom": "0",
				"left": "2%",
				"right": "2%"
			}}
			round={{ corner: "top", size: "0" }}
			width="96%"
		>
			{props.text}
		</Box>
		<Box
			tag="article"
			border={[
				{ color: 'lightShade', size: 'small', side: 'top' },
				{ color: 'lightShade', size: 'medium', side: 'right' },
				{ color: 'lightShade', size: 'medium', side: 'left' },
				{ color: 'lightShade', size: 'medium', side: 'bottom' }
			]}
			direction='row'
			align="center"
			justify="center"
			flex overflow={{ horizontal: 'hidden' }}
			pad="medium"
			margin={{
				"top": "0",
				"bottom": "1%",
				"left": "2%",
				"right": "2%"
			}}
			round={{ corner: "bottom", size: "0" }}
			width="96%"
		>
			{props.punch}
		</Box>
	</>
);

export default Joke;