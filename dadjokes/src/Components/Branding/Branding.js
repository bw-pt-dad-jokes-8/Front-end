import React, { useState } from "react";
import { Button, Heading} from 'grommet';
import { Link } from 'react-router-dom';
import { Search } from 'grommet-icons';

import BrandingBar from "./BrandingBar";
import ShowSearch from "../ShowSearch/ShowSearch"

import Logo from "../../logo.svg";

export default function Branding(props) {

	const [search, setSearch] = useState(false);

	return (
		<>
			<BrandingBar className="appbar">
				<Heading level='1' color='brand' size='small' margin='none'>
					{/*<img className="logo" src={Logo} />*/}
					<Link to="/">Dad, Don't Farce!</Link>
				</Heading>
				<Button
					icon={<Search color='brand'/>}
					onClick={() => setSearch(search => !search)}
				/>
			</BrandingBar>
			{search && <ShowSearch {...props} />};
		</>
	);

}