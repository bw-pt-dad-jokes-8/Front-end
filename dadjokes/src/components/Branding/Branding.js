import React, { useState } from "react";
import { Button, Heading} from 'grommet';
import { Previous, Search } from 'grommet-icons';

import BrandingBar from "./BrandingBar";
import ShowSearch from "../ShowSearch/ShowSearch"

export default function Branding(props) {

	const [search, setSearch] = useState(false);

	return (
		<>
			<BrandingBar className="appbar">
				<Button icon={<Previous/>} onClick={() => {
				}}/>
				<Heading level='3' margin='none'>Dad, Don't Farce!</Heading>
				<Button
					icon={<Search/>}
					onClick={() => setSearch(search => !search)}
				/>
			</BrandingBar>
			{search && <ShowSearch />};
		</>
	);

}