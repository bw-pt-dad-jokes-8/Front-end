import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Box, Header, Heading, Button } from 'grommet';
import FormikLoginForm from "../login";

function AddJokeForm({ values, errors, touched, isSubmitting }) {
	return (
		<Box pad="small">
			<Form>
				<Box pad={{ bottom: 'small' }}>
					<label>Username</label>
					<Field type="text" name="username" />
					{touched.username && errors.username && <p>{errors.username}</p>}
				</Box>
				<Box pad={{ bottom: 'small' }}>
					<label>Password</label>
					<Field type="password" name="password" />
					{touched.password && errors.password && <p>{errors.password}</p>}
				</Box>

				<button type="submit" disabled={isSubmitting}>Login &rarr;</button>
			</Form>
		</Box>
	);
}

function FormikAddJokeForm() {}

export default FormikAddJokeForm;