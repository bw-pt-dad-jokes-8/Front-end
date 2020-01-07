import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from 'grommet';

import DashBar from "./DashBar";

const Dash = (props) => {
	let history = useHistory();
	return (
		<DashBar className="userbar">
			<Box
				justify="center"
				align="center"
				width="25%"
				pad="small"
			>
				<Button
					label="Home"
					fill="horizontal"
					color="secondary"
					onClick={() => history.push("/")}
					primary
					{...props}
				/>
			</Box>
			<Box
				justify="center"
				align="center"
				width="25%"
				pad="small"
			>
				<Button
					label="Add Joke"
					fill="horizontal"
					color="secondary"
					onClick={() => history.push("/")}
					primary
					{...props}
				/>
			</Box>
			<Box
				justify="center"
				align="center"
				width="25%"
				pad="small"
			>
				<Button
					label="Dashboard"
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
				width="25%"
				pad="small"
			>
				<Button
					label="Logut"
					fill="horizontal"
					color="secondary"
					onClick={() => history.push("/")}
					primary
					{...props}
				/>
			</Box>
		</DashBar>
	);
};

export default Dash;