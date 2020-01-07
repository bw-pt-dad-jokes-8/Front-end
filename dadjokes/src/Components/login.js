import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched, isSubmitting }) {
  return (

    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>

      <button type="submit" disabled={isSubmitting}>Login &rarr;</button>
    </Form>

  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",

    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, formikBag) {
    //console.log(formikBag);
    if (values.username === "alreadytaken@atb.dev") {
      formikBag.setErrors({ username: "That username is already taken" });
    } else {
      axios
        .post("https://dad-jokes-8.herokuapp.com/api/login", values)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          formikBag.props.history.push('/dashboard');
          //console.log(res); // Data was created successfully and logs to console
          formikBag.resetForm();
          formikBag.setSubmitting(false);

        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          //setSubmitting(false);
        });
    }
  }
})(LoginForm);

export default FormikLoginForm;