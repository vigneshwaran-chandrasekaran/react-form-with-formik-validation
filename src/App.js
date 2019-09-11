import React from 'react';
import './App.css';
import { withFormik } from 'formik';
import Yup from 'yup';

const App = ({
  values,
  handleChange
}) => {
  return (
    <div className="container">
      <div className='d-flex flex-row justify-content-center'>
        <div className='col-2'></div>
        <div className='col-6'>
          <form>
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
            {/* <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button> */}
          </form>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      email: 'vigneshwaran'
    }
  }
})(App);

export default FormikApp;
