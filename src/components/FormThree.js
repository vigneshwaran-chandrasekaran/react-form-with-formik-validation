import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Line from './Line';

const FormThree = () => (
    <>
        <h3>(FormThree) Any place in your app!</h3>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field
                        className="form-control mb-2"
                        type="email"
                        name="email"
                        placeholder="email" />
                    <ErrorMessage className='text-danger small' name="email" component="div" />
                    <Field
                        className="form-control mb-2"
                        type="password"
                        name="password"
                        placeholder="password" />
                    <ErrorMessage className='text-danger small' name="password" component="div" />
                    <button className="btn btn-primary m-2" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
        <Line />
    </>
);

export default FormThree;