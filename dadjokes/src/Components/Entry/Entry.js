import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from 'grommet';

import EntryBar from "./EntryBar";

const Entry = (props) => {
	let history = useHistory();
	return (
		<EntryBar className="userbar">
			<Box
				justify="center"
				align="center"
				width="50%"
			>
				<Button
					label="Sign Up"
					fill="horizontal"
					color="secondary"
					onClick={() => history.push("/register")}
					primary
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
				/>
			</Box>
		</EntryBar>
	);
};

export default Entry;