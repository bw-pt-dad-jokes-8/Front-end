import React, { useEffect, useState } from "react";
import { Grommet, Header, Heading, Button, Menu, Box } from 'grommet';

import theme from "../Styles/Theme";
import AppBar from "../Branding/AppBar";
import Main from "./Main";
import UserBar from "../Entry/UserBar";

export default function Home() {

	const [search, setSearch] = useState({showSearch: false});
	console.log("state", search);

	return (
		<Grommet theme={theme}>
			<AppBar className="appbar">
				<Button icon={<Previous />} onClick={() => {}} />
				<Heading level='3' margin='none'>Dad, Don't Farce!</Heading>
				<Button
					icon={<Search />}
					onClick={() => {}}
				/>
			</AppBar>
			<Main />
			<UserBar className="userbar">
				<Button label="Sign Up" primary>Sign Up</Button>
				<Button label="Sign In">Sign In</Button>
			</UserBar>
		</Grommet>
	);
}
