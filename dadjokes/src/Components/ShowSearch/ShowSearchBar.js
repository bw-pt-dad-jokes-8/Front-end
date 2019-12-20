import React from "react";
import { Box } from 'grommet';

const ShowSearchBar = (props) => (
	<Box
		tag='div'
		direction='row'
		background='light'
		align='center'
		height='60px'
		// justify='between'
		pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
		elevation='medium'
		style={{ zIndex: '1' }}
		{...props}
	/>
);

export default ShowSearchBar;