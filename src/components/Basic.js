import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Debug } from './Debug';

const initialValues = {
  firstName: '',
  lastName: '',
  email: 'a',
}

const Basic = () => (
  <>
    <h3>Basic Sign Up</h3>
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={() => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field className="form-control" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field className="form-control" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field className="form-control" name="email" placeholder="jane@acme.com" type="email" />
          <button className="btn btn-primary mt-2" type="submit">Submit</button>
          <Debug />
        </Form>
      )}
    />
  </>
);

export default Basic;
