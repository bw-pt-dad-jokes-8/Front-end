import React from "react";
import { Box, Button } from 'grommet';
import {FormEdit, FormTrash } from "grommet-icons";

import JokeText from "../Joke/JokeText";

const UserJoke = (props) => (
	<article>
		<JokeText className="joke joke-text">

			<Box tag="div" width="100%">
				{props.text}
			</Box>
			<Box tag="div" margin={{ top: "0.5rem" }} width="100%">
				{props.punch}
			</Box>
			<Box tag="div" flex direction="row" margin={{ top: "0.5rem" }}>
				<Button icon={<FormEdit color='brand'/>}  className="button button-edit"/>
				<Button icon={<FormTrash color='brand'/>} className="button button-del" />
				{/*<Box pad="0">*/}

				{/*</Box>*/}
				{/*<Box pad="0">*/}

				{/*</Box>*/}
			</Box>
		</JokeText>
	</article>
);

export default UserJoke;