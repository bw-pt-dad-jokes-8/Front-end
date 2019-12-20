import React from "react";
import {Box, Button, Grommet} from 'grommet';

import EntryBar from "./EntryBar";

const Entry = (props) => (
	<EntryBar className="userbar">
		<Button label="Sign Up" primary>Sign Up</Button>
		<Button label="Sign In">Sign In</Button>
	</EntryBar>
);

export default Entry;