import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from 'grommet';
import {Dashboard, Home, Logout } from 'grommet-icons';

import DashBar from "./DashBar";

const Dash = (props) => {
	let history = useHistory();
	return (
		<DashBar className="userbar">
			<Box
				justify="center"
				align="center"
				width="33%"
				pad="small"
			>
				<Button
					className="entry-button"
					// label="Home"
					icon={<Home color='brand'/>}
					fill="horizontal"
					color="secondary"
					onClick={() => history.push("/")}
					primary
					{...props}
				/>
			</Box>
			{/*<Box*/}
			{/*	justify="center"*/}
			{/*	align="center"*/}
			{/*	width="25%"*/}
			{/*	pad="small"*/}
			{/*>*/}
			{/*	<Button*/}
			{/*		label="Add Joke"*/}
			{/*		fill="horizontal"*/}
			{/*		color="secondary"*/}
			{/*		onClick={() => history.push("/")}*/}
			{/*		primary*/}
			{/*		{...props}*/}
			{/*	/>*/}
			{/*</Box>*/}
			<Box
				justify="center"
				align="center"
				width="33%"
				pad="small"
			>
				<Button
					className="entry-button"
					// label="Dashboard"
					icon={<Dashboard color='brand'/>}
					fill="horizontal"
					color="secondary"
					onClick={() => history.push("/dashboard")}
					primary
					{...props}
				/>
			</Box>
			<Box
				justify="center"
				align="center"
				width="33%"
				pad="small"
			>
				<Button
					className="entry-button"
					// label="Logout"
					icon={<Logout color='brand'/>}
					fill="horizontal"
					color="secondary"
					onClick={() => localStorage.removeItem('token') && history.push("/")}
					primary
					{...props}
				/>
			</Box>
		</DashBar>
	);
};

export default Dash;