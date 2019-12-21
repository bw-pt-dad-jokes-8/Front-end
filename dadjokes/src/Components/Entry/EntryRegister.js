import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Header, Heading, Button } from 'grommet';
import { Previous } from 'grommet-icons';

const EntryRegister = props => {
	let history = useHistory();
	return (
		<Box tag="section" className="entry" pad="medium" >
			<Box tag="div" direction='row' pad="0" >
				<Button	icon={<Previous color='brand'/>} onClick={() => history.goBack()} />
				<Box justify='start' margin="small" >
					<Heading level="2" color="brand" margin="small">Register</Heading>
				</Box>
			</Box>
		</Box>
	);
};

export default EntryRegister;