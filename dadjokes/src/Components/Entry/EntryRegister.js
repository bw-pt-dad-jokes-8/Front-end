import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Header, Heading, Button } from 'grommet';
import { Previous } from 'grommet-icons';
import FormikRegisterForm from '../register';

const EntryRegister = props => {
	let history = useHistory();
	return (
		<Box tag="section" className="entry" pad="medium" >
			<Box tag="div" direction='row' pad="0" >
				<Box direction="row" align="start" pad={{ top: '20px' }}>
					<Button	icon={<Previous color='brand'/>} onClick={() => history.goBack()} />
				</Box>
				<Box justify='start' margin="small" >
					<Heading level="2" color="brand" margin="small">Register</Heading>
						<FormikRegisterForm history={history}/>
				</Box>
			</Box>
		</Box>
	);
};

export default EntryRegister;