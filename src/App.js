import React from 'react';
import './App.css';
import { withFormik } from 'formik';
import Yup from 'yup';

const App = ({
  values,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className="container">
      <div className='d-flex flex-row justify-content-center'>
        <div className='col-2'></div>
        <div className='col-6'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    // if we pass props to component means we can get it in mapPropsToValues(props)
    return {
      email: email || 'vigneshwaran',
      password: password || ''
    }
  },

  handleChange(values) {
    console.log({ values });
  },

  handleSubmit(values) {
    console.log({ values });
  }
})(App);

export default FormikApp;
