import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Box} from "grommet";

function RegisterForm({ values, errors, touched, isSubmitting }) {
  return (
    <Box pad="small">
      <Form>
        <Box pad={{ bottom: 'small' }}>
          <label>Username</label>
          <Field type="text" name="username"  />
          {touched.username && errors.username && <p>{errors.username}</p>}
        </Box>
        <Box pad={{ bottom: 'small' }}>
          <label>Password</label>
          <Field type="password" name="password"  />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </Box>
        <Box pad={{ bottom: 'small' }}>
          <label>E-mail address</label>
          <Field type="email" name="email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </Box>

        <button disabled={isSubmitting} >Register &rarr;</button>
      </Form>
    </Box>
  );
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password, email }) {
    return {
      username: username || "",
      password: password || "",
      email: email || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    email: Yup.string()
    .email("Email not valid")
    .required('Email is required'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, formikBag }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      console.log(values);
      axios
        .post("https://dad-jokes-8.herokuapp.com/api/register ", values)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          // formikBag.props.history.push('/dashboard');
          //console.log("Registered", res.data); // Data was created successfully and logs to console
          // localStorage.setItem("info", res.data.info);
          localStorage.setItem("id", res.data.info.id);
          formikBag.resetForm();
          formikBag.setSubmitting(false);

        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(RegisterForm);
export default FormikRegisterForm;