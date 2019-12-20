import React from "react";
import { Button, Heading} from 'grommet';
import { Previous, Search } from 'grommet-icons';

import AppBar from "./AppBar";

const Branding = (props) => (
	<AppBar className="appbar">
		<Button icon={<Previous />} onClick={() => {}} />
		<Heading level='3' margin='none'>Dad, Don't Farce!</Heading>
		<Button
			icon={<Search />}
			onClick={() => {}}
		/>
	</AppBar>
);

export default Branding;