import React from "react";
import { Box, Button } from 'grommet';
import { useHistory } from "react-router-dom";
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
	
	return (
	
	<article>
		<JokeText className="joke joke-text">

			<Box tag="div" width="100%">
				{props.text}
			</Box>
			<Box tag="div" margin={{ top: "1rem" }} width="100%">
				{props.punch}
			</Box>
			<Box>
				<span className="delete_button"  onClick={() => {deleteJoke()}}>Delete Joke</span>
			</Box>
			{/* <UpdateJokeForm newState={newState}/> */}
			<Box>
				<span className="delete_button"  onClick={() => history.push("/update")}
					{...props} >Update</span> 
				 
			</Box>
		</JokeText>
		
	</article>
)};

export default UserJoke;