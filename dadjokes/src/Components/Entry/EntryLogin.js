import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Header, Heading, Button } from 'grommet';
import { Previous } from 'grommet-icons';

const EntryLogin = props => {
	let history = useHistory();
	return (
		<Box tag="section" className="entry" pad="medium" >
			<Box tag="header" direction='row' pad="0" >
				<Button	icon={<Previous color='primary'/>} onClick={() => history.goBack()} />
				<Box justify='start' margin="small" >
					<Heading level="2" color="primary" margin="small">Login</Heading>
				</Box>
			</Box>
		</Box>
	);
};

export default EntryLogin;