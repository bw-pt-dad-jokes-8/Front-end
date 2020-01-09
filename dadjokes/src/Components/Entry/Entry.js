import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from 'grommet';

import EntryBar from "./EntryBar";

const Entry = (props) => {
	let history = useHistory();
	console.log(props)
	return (
		<EntryBar className="userbar">
			<Box
				justify="center"
				align="center"
				width="50%"
				pad="small"
			>
				<Button
					label="Sign Up"
					fill="horizontal"
					color="secondary"
					onClick={() => history.push("/register")}
					primary
					{...props}
				/>
			</Box>
			<Box
				justify="center"
				align="center"
				width="50%"
			>
				<Button
					label="Sign In"
					fill="horizontal"
					color="secondary"
					onClick={() => history.push("/login")}
					{...props}
				/>
			</Box>
		</EntryBar>
	);
};

export default Entry;