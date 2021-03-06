import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Box } from 'grommet';
import {axiosWithAuth} from '../Users/Dashboard'
import {UserJokeAdded} from "../Users/UserJoke";


function AddJokeForm({ values, errors, touched, status }) {
	console.log("values", values);
	console.log("errors", errors);
	console.log("touched", touched);
	console.log("status", status);

	const [jokeAdded, setJokeAdded] = useState([]);

	// useEffect(() => {
	// 	console.log("Changed:", status);
	// 	status && setJokeAdded(jokeAdded => [...jokeAdded
	// 		, status]);
	// }, [status]);
	//
	// console.log("Jokes", jokeAdded);

	useEffect(() => {

		const id = localStorage.getItem("id");

		axiosWithAuth()
			.get(`https://dad-jokes-8.herokuapp.com/api/restricted/saved`)
			.then(response => {
					console.log("Response User Jokes Added", response.data);
					setJokeAdded(response.data)
				}
			)
			.catch(error => {
				console.log("Sorry", error);
			});
	}, []);

	console.log("Joke Added", jokeAdded);

	return (
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
							checked={values.status}
							className="check-box"
						/>
						<span className="checkmark" />
					</label>
				</Box>
				<button type="submit">Add Joke &rarr;</button>
			</Form>
			{/*{jokeAdded.map(item => {*/}
			{/*		return (*/}
			{/*	 <ul key={item.id}>*/}
			{/*			<li>Joke: {item.question}</li>*/}
			{/*			<li>Punch-line: {item.answer}</li>*/}
			{/*		</ul>*/}
			{/*		)*/}
			{/*	})*/}
			{/*}*/}
		</Box>
	);
}

const FormikAddJokeForm = withFormik({

	mapPropsToValues({ user_id, question, answer, status }) {
		return {
			user_id: Number(user_id) || "",
			question: question || "",
			answer: answer || "",
			status: status || false,
		};
	},

	validationSchema: Yup.object().shape({
		question: Yup.string().required("Begin with the Joke!"),
		answer: Yup.string().required("Add a Punch-line!")
	}),

	handleSubmit(values, { setStatus, resetForm }) {
		console.log("submitting", values);
		const newValue = {
			...values,
			user_id: localStorage.getItem("id")
		};
		console.log("NewValue", values);
		axiosWithAuth()
			.post("https://dad-jokes-8.herokuapp.com/api/restricted/jokes", newValue)
			.then(response => {
				console.log("success", response);
				setStatus(response.data);

				resetForm();
			})
			.catch(error => console.log(error.response));
	}
})(AddJokeForm);



export default FormikAddJokeForm;