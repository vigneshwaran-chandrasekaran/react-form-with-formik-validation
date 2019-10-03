import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Debug } from './Debug';
import Line from './Line';

const validate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const SignIn = () => (
  <>
    <h1>(SyncValidation) Sign In</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={validate}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ errors, touched }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            className="form-control"
            name="email"
            placeholder="john@acme.com"
            type="email" />
          <div className="field-error">
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger small" />
          </div>
          <label htmlFor="password">Password</label>
          <Field
            className="form-control"
            name="password"
            type="password" />
          <button className="btn btn-primary secondary mt-2" type="submit">Sign In</button>
          <Debug />
        </Form>
      )}
    />
    <Line />
  </>
);

export default SignIn;
