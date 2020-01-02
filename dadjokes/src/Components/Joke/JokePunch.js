import React from "react";
import { Box } from 'grommet';

const JokePunch = (props) => (
		<Box
			tag="div"
			border={[
				{ color: 'lightShade', size: 'small', side: 'top' },
				{ color: 'lightShade', size: 'medium', side: 'right' },
				{ color: 'lightShade', size: 'medium', side: 'left' },
				{ color: 'lightShade', size: 'medium', side: 'bottom' }
			]}
			direction='row'
			align="center"
			justify="center"
			flex
			// overflow={{ horizontal: 'hidden' }}
			pad={{
				vertical: "small",
				horizontal: "mall"
			}}
			margin={{
				"top": "0",
				"bottom": "1%",
				"left": "2%",
				"right": "2%"
			}}
			round={{ corner: "bottom", size: "0" }}
			width="96%"
			{...props}
		/>
	);

export default JokePunch;