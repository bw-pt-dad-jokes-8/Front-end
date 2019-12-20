import React from "react";
import { Button } from 'grommet';

import EntryBar from "./EntryBar";

const Entry = (props) => (
	<EntryBar className="userbar">
		<Button label="Sign Up" color="secondary" pad="medium" primary />
		<Button label="Sign In" color="secondary"  pad="medium" />
	</EntryBar>
);

export default Entry;