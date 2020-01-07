import React from "react";
import { Box } from 'grommet';

const DashBar = (props) => (
	<Box
		tag='div'
		direction='row'
		align='center'
		justify='around'
		background='brand'
		// height='60px'
		pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
		elevation='medium'
		style={{ zIndex: '1' }}
		{...props}
	/>
);

export default DashBar;