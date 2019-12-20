import React from "react";
import { Button, Heading} from 'grommet';
import { Previous, Search } from 'grommet-icons';

import BrandingBar from "./BrandingBar";

const Branding = (props) => (
	<BrandingBar className="appbar">
		<Button icon={<Previous />} onClick={() => {}} />
		<Heading level='3' margin='none'>Dad, Don't Farce!</Heading>
		<Button
			icon={<Search />}
			onClick={() => {}}
		/>
	</BrandingBar>
);

export default Branding;