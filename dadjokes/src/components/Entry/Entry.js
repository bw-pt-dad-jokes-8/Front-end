import React from "react";
import {Box, Button, Grommet} from 'grommet';

import UserBar from "./UserBar";

const Entry = (props) => (
	<UserBar className="userbar">
		<Button label="Sign Up" primary>Sign Up</Button>
		<Button label="Sign In">Sign In</Button>
	</UserBar>
);

export default Entry;