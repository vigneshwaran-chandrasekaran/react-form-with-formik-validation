import React from 'react';
import './App.css';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const App = ({
  values,
  errors
}) => {
  return (
    <div className="container">
      <div className='d-flex flex-row justify-content-center'>
        <div className='col-2'></div>
        <div className='col-6'>
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
              {errors.email && <div className='text-danger small'>{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <Field
                type="password"
                className="form-control"
                id="pwd"
                name="password"
              />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  name="newsletter"
                  checked={values.newsletter}
                />
                <span> I agree your condition.</span>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="sel1">Select list:</label>
              <Field component="select" name="plan" className="form-control" id="sel1">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </Field>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    // if we pass props to component means we can get it in mapPropsToValues(props)
    return {
      email: email || 'vigneshwaran',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || '2',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(50).required()
  }),
  handleSubmit(values) {
    console.log({ values });
  }
})(App);

export default FormikApp;
