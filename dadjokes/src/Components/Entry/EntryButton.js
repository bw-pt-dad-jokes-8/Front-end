import React from "react";
import { Button } from 'grommet';

const EntryButton = (props) => (
	<>
		<Button label={props.label} pad='medium' >
			{/*{props.label}*/}
		</Button>
	</>
);

export default EntryButton;