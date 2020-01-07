import React from "react";
import { TextInput } from "grommet";

import ShowSearchBar from "./ShowSearchBar";

const ShowSearch = (props) => (
	<ShowSearchBar className="search">
		<TextInput type="text"/>
	</ShowSearchBar>
);

export default ShowSearch;