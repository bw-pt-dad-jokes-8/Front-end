import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Heading, Button } from 'grommet';
import { Previous } from 'grommet-icons';
import FormikRegisterForm from '../register';

const EntryRegister = () => {
	let history = useHistory();
	return (
		<Box tag="section" className="entry" pad="medium" >
			<Box tag="div" direction='row' pad="0" >
				<Box direction="row" align="start" pad={{ top: 'small' }}>
					<Button	icon={<Previous color='brand'/>} onClick={() => history.goBack()} className="back-button"/>
				</Box>
				<Box justify='start' margin="small" flex>
					<Heading level="2" color="brand" margin="small">Register</Heading>
						<FormikRegisterForm history={history}/>
				</Box>
			</Box>
		</Box>
	);
};

export default EntryRegister;