import React from "react";
import { Box, Button } from 'grommet';
import { useHistory } from "react-router-dom";
import { Edit, FormEdit, Trash, FormTrash } from "grommet-icons";

import JokeText from "../Joke/JokeText";
import { axiosWithAuth } from "./Dashboard";
import UpdateJokeForm from "../Joke/UpdateJokeForm";




const UserJoke = (props) => {
	// console.log(props);
	let history = useHistory();
	const id = props.id
	const newState = props
	console.log("user state",newState);
	 const deleteJoke=()=>{
		axiosWithAuth()
		.delete(`https://dad-jokes-8.herokuapp.com/api/restricted/jokes/${id}`)
		.then(res=>{
			return (alert("Joke Deleted"));
		})
			.catch(err => {
				console.log(err); // There was an error creating the data and logs to console
				
			  });
			}
			const populateUpdateHandler = ()=>{
				const joke= {
					id: props.id,
					question: props.text,
					answer: props.punch,
					status: props.status
				}

				props.populateJoke(joke)
				history.push("/update")
			}
	
	return (
	
	<article>
		<JokeText className="joke joke-text">

			<Box tag="div" width="100%">
				{props.text}
			</Box>
			<Box tag="div" margin={{ top: "0.5rem" }} width="100%">
				{props.punch}
			</Box>
			<Box tag="div" flex direction="row" margin={{ top: "1rem" }} className="button-group" width="100%">
				<Button
					// icon={<FormEdit color='brand'/>}
					icon={<Edit color='brand'/>}
					// label="Edit"
					className="button button-edit"
					onClick={populateUpdateHandler}
					{...props}
				/>
				<Button
					// icon={<FormTrash color='brand'/>}
					icon={<Trash color='brand'/>}
					// label="Delete"
					className="button button-del"
					onClick={() => {deleteJoke()}}
				/>
			</Box>
		</JokeText>
	</article>
)};

export default UserJoke;
