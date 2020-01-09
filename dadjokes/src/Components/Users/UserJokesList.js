import React, {useEffect, useState} from "react";
import { Box } from 'grommet';
import {axiosWithAuth} from './Dashboard';
import UserJoke from "./UserJoke";

export default function UserJokesList(props) {

	const [userJokes, setUserJokes] = useState([]);

	useEffect(() => {

		const id = localStorage.getItem("id");

		axiosWithAuth()
			.get(`https://dad-jokes-8.herokuapp.com/api/restricted/jokes/${id}`)
			.then(response => {
				console.log("Response User Jokes", response.data);
				setUserJokes(response.data)
				}
			)
			.catch(error => {
				console.log("Sorry", error);
			});
	}, []);

	return (
		<Box direction='row' flex overflow="auto" className="main" pad="0" >
			<Box className="jokes-list" flex align='center' justify='center' pad="0">
				{userJokes.map(item => {
					return <UserJoke text={item.question} punch={item.answer} key={item.id} />
				})
				}
			</Box>
		</Box>
	);
};
