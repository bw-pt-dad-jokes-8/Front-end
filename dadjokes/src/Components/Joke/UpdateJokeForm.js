import React from "react";
// import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import { Box, Heading, Button } from 'grommet';
import {axiosWithAuth} from '../Users/Dashboard'
import { Previous } from 'grommet-icons';
import { useHistory } from "react-router-dom";

const UpdateJokeForm = ({ values, errors, touched }) =>{
	let history = useHistory();
	
	// console.log("errors", errors);
	// console.log("touched", touched);
	
	return (

		<Box tag="section" className="entry" pad="medium" >
			<Box tag="div" direction='row' pad="0" >
				<Box direction="row" align="start" pad={{ top: 'small' }}>
					<Button	icon={<Previous color='brand'/>} onClick={() => history.goBack()} />
				</Box>
				<Box justify='start' margin="small" >
					<Heading level="2" color="brand" margin="small">Update your Joke</Heading>

		<Box pad="small">
			<Form>
				<Box pad={{ bottom: 'small' }}>
					<label>Joke</label>
					<Field type="text" name="question" />
					{touched.question && errors.question && <p>{errors.question}</p>}
				</Box>
				<Box pad={{ bottom: 'small' }}>
					<label>Punch-line</label>
					<Field type="text" name="answer" />
					{touched.answer && errors.answer && <p>{errors.answer}</p>}
				</Box>
				<Box pad={{ bottom: 'small' }}>
					<label className="checkbox-container">
						Public?
						<Field
							type="checkbox"
							name="status"
							checked={values.status}
							className="check-box"
						/>
						<span className="checkmark" />
					</label>
				</Box>
				<button type="submit">Update Joke &rarr;</button>
			</Form>
		</Box>

		</Box>
			</Box>
		</Box>
	);
};

const FormikUpdateJokeForm = withFormik({

	mapPropsToValues({joke, user_id, question, answer, status}) {
		return {
			user_id: Number(user_id) || "",
			question: joke.question || "",
			answer: joke.answer || "",
			status: joke.status || joke.status,
		};
	},

	validationSchema: Yup.object().shape({
		question: Yup.string().required("Begin with the Joke!"),
		answer: Yup.string().required("Add a Punch-line!")
	}),

	handleSubmit( values, {props, setStatus, resetForm }) {
		console.log();
		
		
		const newValue = {
			...values,
			user_id: localStorage.getItem("id")
		};
		axiosWithAuth()
			.put(`https://dad-jokes-8.herokuapp.com/api/restricted/jokes/${props.joke.id}`, newValue)
			.then(response => {
				console.log("success", response);
				setStatus(response.data);

				props.history.push("/dashboard");
			})
			.catch(error => console.log(error.response));
	}
})(UpdateJokeForm);

export default FormikUpdateJokeForm;