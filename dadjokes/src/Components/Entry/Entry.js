import React from "react";
import { Button } from 'grommet';

import EntryBar from "./EntryBar";

const Entry = (props) => (
	<EntryBar className="userbar">
		<Button label="Sign Up" href="/register" color="secondary" pad="medium" primary />
		<Button label="Sign In" href="/login" color="secondary" pad="medium" />
	</EntryBar>
);

export default Entry;