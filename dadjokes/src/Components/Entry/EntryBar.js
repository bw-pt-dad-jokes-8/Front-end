import React from "react";
import { Box } from 'grommet';

const EntryBar = (props) => (
	<Box
		tag='div'
		direction='row'
		align='center'
		justify='around'
		background='primary'
		// height='60px'
		pad={{ left: 'medium', right: 'medium', vertical: 'medium' }}
		elevation='medium'
		style={{ zIndex: '1' }}
		{...props}
	/>
);

export default EntryBar;