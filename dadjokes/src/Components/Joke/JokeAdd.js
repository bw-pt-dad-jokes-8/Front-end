import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Heading, Button } from 'grommet';
import { Previous } from 'grommet-icons';
import FormikAddJokeForm from "./JokeAddForm";

const JokeAdd = () => {
	let history = useHistory();
	return (
		<Box tag="section" className="entry" pad="medium" >
			<Box tag="div" direction='row' pad="0" >
				<Box direction="row" align="start" pad={{ top: 'small' }}>
					<Button	icon={<Previous color='brand'/>} onClick={() => history.goBack()} />
				</Box>
				<Box justify='start' margin="small" >
					<Heading level="2" color="brand" margin="small">Add your Joke</Heading>
					<FormikAddJokeForm />
				</Box>
			</Box>
		</Box>
	);
};

export default JokeAdd;