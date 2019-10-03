import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Debug } from './Debug';

/**
 * In this example
 * we have done multi section form
 * used two sections
 */

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : 'Required');

class Wizard extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues,
    };
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      bag.setSubmitting(false);
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ values, handleSubmit, isSubmitting, handleReset }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <button
                  type="button"
                  className="btn btn-primary secondary mt-2"
                  onClick={this.previous}
                >
                  « Previous
                </button>
              )}

              {!isLastPage && <button type="submit" className="btn btn-primary mt-2">Next »</button>}
              {isLastPage && (
                <button className="btn btn-success ml-2 mt-2" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              )}
            </div>

            <Debug />
          </form>
        )}
      />
    );
  }
}

const App = () => (
  <div className="App">
    <h3>(MultistepWizard) Multistep / Form Wizard </h3>
    <Wizard
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        favoriteColor: '',
      }}
      onSubmit={(values, actions) => {
        sleep(300).then(() => {
          window.alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        });
      }}
    >
      <Wizard.Page>
        <div>
          <label>First Name</label>
          <Field
            className="form-control"
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            validate={required}
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-danger small"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            className="form-control"
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            validate={required}
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-danger small"
          />
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.favoriteColor) {
            errors.favoriteColor = 'Required';
          }
          return errors;
        }}
      >
        <div>
          <label>Email</label>
          <Field
            className="form-control"
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" className="text-danger small" />
        </div>
        <div>
          <label>Favorite Color</label>
          <Field name="favoriteColor" component="select" className="form-control">
            <option value="">Select a Color</option>
            <option value="#ff0000">❤️ Red</option>
            <option value="#00ff00">💚 Green</option>
            <option value="#0000ff">💙 Blue</option>
          </Field>
          <ErrorMessage
            name="favoriteColor"
            component="div"
            className="text-danger small"
          />
        </div>
      </Wizard.Page>
    </Wizard>
  </div>
);

export default App;
