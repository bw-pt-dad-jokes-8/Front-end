import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Box } from 'grommet';

function AddJokeForm({ values, errors, touched }) {
	console.log("values", values);
	console.log("errors", errors);
	console.log("touched", touched);

	return (
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
						<Field
							type="checkbox"
							name="status"
							checked={values.status}
						/>
						<span className="checkmark" />
						Private?
					</label>
				</Box>
				<button type="submit">Add Joke &rarr;</button>
			</Form>
		</Box>
	);
}

const FormikAddJokeForm = withFormik({

	mapPropsToValues({id, user_id, questions, answer, status}) {
		return {
			id: id || "",
			user_id: user_id || "",
			questions: questions || "",
			answer: answer || "",
			status: status || "",
		};
	},

	validationSchema: Yup.object().shape({
		questions: Yup.string().required("Begin with the Joke!"),
		answer: Yup.string().required("Add a Punch-line!")
	}),

	handleSubmit(values, { setStatus, resetForm }) {
	console.log("submitting", values);
	axios
		.post("https://dad-jokes-8.herokuapp.com/api/restricted/jokes/", values)
		.then(response => {
			console.log("success", response);
			setStatus(response.data);

			resetForm();
		})
		.catch(error => console.log(error.response));
}
})(AddJokeForm);

export default FormikAddJokeForm;