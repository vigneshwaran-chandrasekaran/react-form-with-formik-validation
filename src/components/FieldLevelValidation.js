import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Debug } from './Debug';

const isRequired = message => value => (!!value ? undefined : message);

/**
 * In this example
 * setFieldTouched = is used to programmatically touch the field
 * setFieldValue = is used to set value to filed programmatically
 * validateField = validate single filed based on input key value
 */

const FieldLevelValidation = () => (
  <div>
    <h3>(FieldLevelValidation) Pick a username</h3>
    <Formik
      initialValues={{ username: '', email: '' }}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
      render={({
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        validateField,
        validateForm,
      }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <div>
              <Field
                className="form-control"
                name="username"
                validate={isRequired('This field is required')}
                type="text"
                placeholder="Username"
              />
              <ErrorMessage className='text-danger small' name="username" component="div" />
            </div>
            <br />
            <div>
              <Field
                className="form-control"
                name="email"
                validate={isRequired('This field is required')}
                type="text"
                placeholder="Email"
              />
              <ErrorMessage className='text-danger small' name="email" component="div" />
            </div>

            <div className="mt-4">
              <div>username field actions</div>
              <button
                className="btn btn-primary mr-2"
                type="button"
                onClick={() => {
                  setFieldTouched('username', true, true);
                }}
              >
                setFieldTouched
            </button>
              <button
                className="btn btn-primary mr-2"
                type="button"
                onClick={() => {
                  setFieldValue('username', '', true);
                }}
              >
                setFieldValue
            </button>
              <button
                className="btn btn-primary mr-2"
                type="button"
                onClick={() => {
                  validateField('username');
                }}
              >
                validateField
            </button>
              <br />
            </div>
            <br />
            <div>
              <div>Form actions</div>
              <button className="btn btn-primary mr-2" type="button" onClick={validateForm}>
                validate form
            </button>
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
            <Debug />
          </Form>
        )}
    />
  </div>
);

export default FieldLevelValidation;
