import React from "react";
import { RoutedButton } from 'grommet';

import EntryBar from "./EntryBar";

const Entry = (props) => (
	<EntryBar className="userbar">
		<RoutedButton label="Sign Up" path="/register" color="secondary" pad="medium" primary />
		<RoutedButton label="Sign In" path="/login" color="secondary" pad="medium" />
	</EntryBar>
);

export default Entry;