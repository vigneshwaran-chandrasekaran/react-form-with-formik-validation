import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Debug } from './Debug';
import Line from './Line';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const AsyncSubmit = () => (
  <>
    <h3>AsyncSubmit Sign Up</h3>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async values => {
        await sleep(1000);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field className="form-control" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field className="form-control" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field className="form-control" name="email" placeholder="jane@acme.com" type="email" />
          <button className="btn btn-primary mt-2" type="submit" disabled={isSubmitting}>
            Submit
                </button>
          <Debug />
        </Form>
      )}
    </Formik>
    <Line />
  </>
);

export default AsyncSubmit;
