import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Debug } from "./Debug";
import Line from "./Line";

// While you can use any validation library (or write you own), Formik
// comes with special support for Yup by @jquense. It has a builder API like
// React PropTypes / Hapi.js's Joi. You can define these inline or, you may want
// to keep them separate so you can reuse schemas (e.g. address) across your application.
const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  firstName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a last name that long")
    .required("Required")
});

const SignUp = () => (
  <>
    <h3>(SchemaValidation) Sign up </h3>
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: ""
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {() => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field
            className="form-control"
            name="firstName"
            placeholder="Jane"
            type="text"
          />

          <ErrorMessage
            name="firstName"
            component="div"
            className="text-danger small"
          />

          <label htmlFor="lastName">Last Name</label>
          <Field
            className="form-control"
            name="lastName"
            placeholder="Doe"
            type="text"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-danger small"
          />

          <label htmlFor="email">Email</label>
          <Field
            className="form-control"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-danger small"
          />

          <button className="btn btn-primary secondary mt-2" type="submit">
            Submit
          </button>
          <Debug />
        </Form>
      )}
    </Formik>
    <Line />
  </>
);

export default SignUp;
