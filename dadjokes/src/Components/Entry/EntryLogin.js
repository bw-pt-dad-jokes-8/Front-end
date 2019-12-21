import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Header, Heading, Button } from 'grommet';
import { Previous } from 'grommet-icons';

const EntryLogin = props => {
	let history = useHistory();
	return (
		<Box className="entry">
			<Header  justify='start' margin="medium" >
				<Button
					icon={<Previous color='primary'/>}
					onClick={() => history.goBack()}
				/>
				<Heading level="2" color="primary">
					Login
				</Heading>
			</Header>
		</Box>
	);
};

export default EntryLogin;