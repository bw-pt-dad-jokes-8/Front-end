import React from "react";
import { Box, Grommet } from 'grommet';

const UserBar = (props) => (
	<Box
		tag='entry'
		direction='row'
		align='center'
		justify='center'
		background='primary'
		pad={{ left: 'medium', right: 'medium', vertical: 'medium' }}
		elevation='medium'
		style={{ zIndex: '1' }}
		{...props}
	/>
);

export default UserBar;