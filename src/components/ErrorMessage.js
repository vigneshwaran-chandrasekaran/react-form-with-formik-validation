import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Debug } from './Debug';

// While you can use any validation library (or write you own), Formik
// comes with special support for Yup by @jquense. It has a builder API like
// React PropTypes / Hapi.js's Joi. You can define these inline or, you may want
// to keep them separate so you can reuse schemas (e.g. address) across your application.
const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  firstName: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Required'),
  lastName: Yup.string()
    .min(5, 'Must be longer than 5 characters')
    .max(10, 'Nice try, nobody has a last name that long')
    .required('Required'),
});

// <ErrorMessage /> will ONLY render when a field has an error and has been touched.
const SignUp = () => (
  <div>
    <h1>(ErrorMessage) Sign up</h1>
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ errors, touched }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field className="form-control" name="firstName" placeholder="Jane" type="text" />
          <ErrorMessage
            name="firstName"
            component="div"
            className='text-danger small'
          />

          <label htmlFor="lastName">Last Name</label>
          <Field className="form-control" name="lastName" placeholder="Doe" type="text" />
          {/* this bellow error message is different between other error message component
          here we can add our own new elements */}
          <ErrorMessage name="lastName">
            {(msg /** this is the same as the above */) => (
              <>
                <div className='text-danger small'>{msg}</div>
                <div className='text-success small'>Always shows</div>
              </>
            )}
          </ErrorMessage>

          <label htmlFor="email">Email</label>
          <Field className="form-control" name="email" placeholder="jane@acme.com" type="email" />
          {/* This will render a string */}
          <ErrorMessage name="email" className='text-danger small' />

          <button className="btn btn-primary m-2" type="submit">Submit</button>
          <Debug />
        </Form>
      )}
    />
  </div>
);

export default SignUp;
