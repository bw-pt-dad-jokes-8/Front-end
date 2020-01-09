import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import { Box, Heading, Button } from 'grommet';
import {axiosWithAuth} from '../Users/Dashboard'
import { Previous } from 'grommet-icons';
import { useHistory } from "react-router-dom";

const UpdateJokeForm = ({ newState, errors, touched }) =>{
	let history = useHistory();
	const id = newState.id;
		console.log("id",newState.id);
	 console.log("newState", newState);
	// console.log("errors", errors);
	// console.log("touched", touched);
	console.log("props", newState);
	return (

		<Box tag="section" className="entry" pad="medium" >
			<Box tag="div" direction='row' pad="0" >
				<Box direction="row" align="start" pad={{ top: 'small' }}>
					<Button	icon={<Previous color='brand'/>} onClick={() => history.goBack()} className="back-button"/>
				</Box>
				<Box justify='start' margin="small" flex>
					<Heading level="2" color="brand" margin="small">
						Hi,
					</Heading>
					<Box justify='start' margin="0" >
						<Heading level="3" margin="small">Update your Joke</Heading>
						<Box pad="small">
							<Form>
								<Box pad={{ bottom: 'medium' }}>
									<label>Joke</label>
									<Field type="text" name="question" />
									{touched.question && errors.question && <p>{errors.question}</p>}
								</Box>
								<Box pad={{ bottom: 'medium' }}>
									<label>Punch-line</label>
									<Field type="text" name="answer" />
									{touched.answer && errors.answer && <p>{errors.answer}</p>}
								</Box>
								<Box pad={{ bottom: 'medium' }}>
									<label className="checkbox-container">
										<Box tag="span">Public?</Box>
										<Field
											type="checkbox"
											name="status"
											checked={newState.status}
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
		</Box>
	);
};

const FormikUpdateJokeForm = withFormik({

	mapPropsTonewState({ user_id, question, answer, status}) {
		return {
			user_id: Number(user_id) || "",
			question: question || "",
			answer: answer || "",
			status: status || "",
		};
	},

	validationSchema: Yup.object().shape({
		question: Yup.string().required("Begin with the Joke!"),
		answer: Yup.string().required("Add a Punch-line!")
	}),

	handleSubmit( newState, { setStatus, resetForm }) {
		console.log("submitting", newState);
		const id = newState.id;
		console.log(newState.id);
		const newValue = {
			...newState,
			id: id
		};
		axiosWithAuth()
			.put(`https://dad-jokes-8.herokuapp.com/api/restricted/jokes/${id}`, newValue)
			.then(response => {
				console.log("success", response);
				setStatus(response.data);

				resetForm();
			})
			.catch(error => console.log(error.response));
	}
})(UpdateJokeForm);

export default FormikUpdateJokeForm;