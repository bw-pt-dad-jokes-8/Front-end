import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Heading, Button } from 'grommet';
import { Previous } from 'grommet-icons';
import FormikUpdateJokeForm from "./UpdateJokeForm";


const JokeAdd = (props) => {
    let history = useHistory();
    const id= props.id;
    console.log("id", id);
	return (
		<Box tag="section" className="entry" pad="medium" >
			<Box tag="div" direction='row' pad="0" >
				<Box direction="row" align="start" pad={{ top: 'small' }}>
					<Button	icon={<Previous color='brand'/>} onClick={() => history.goBack()} />
				</Box>
				<Box justify='start' margin="small" >
					<Heading level="2" color="brand" margin="small">Update your Joke</Heading>
					<FormikUpdateJokeForm history={history} id={id}/>
				</Box>
			</Box>
		</Box>
	);
};

export default JokeAdd;