import React from "react";
import { TextInput } from "grommet";

import ShowSearchBar from "./ShowSearchBar";

export default function ShowSearch({ setSearchTerm }) {

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};

	return (
		<ShowSearchBar className="search">
			<TextInput type="text" placeholder="Search for a joke" onChange={handleChange} />
		</ShowSearchBar>
	)
}