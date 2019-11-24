import React from "react";
import { Formik, FastField, Field, Form } from "formik";
import { Debug } from "./Debug";
import Line from "./Line";

class Input extends React.Component {
  renders = 0;
  render() {
    return (
      <div>
        <input {...this.props} />
        <p># of renders: {this.renders++}</p>
      </div>
    );
  }
}

/**
 * https://jaredpalmer.com/formik/docs/api/fastfield
 *
 * <FastField /> is an optimized version of <Field /> meant to be
 * used on large forms (~30+ fields) or when a field has very
 * expensive validation requirements. <FastField /> has the
 * same exact API as <Field>, but implements shouldComponentUpdate()
 * internally to block all additional re-renders unless there
 * are direct updates to the <FastField />'s relevant parts/slice
 * of Formik state.
 */

const Basic = () => (
  <>
    <h3>(FastField) Sign Up</h3>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        field: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);

          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <FastField
            className="form-control"
            name="firstName"
            placeholder="Jane"
            component={Input}
            // as={Input}
            // as is 2.0 > version feature so use component
            disabled={isSubmitting}
          />

          <label htmlFor="lastName">Last Name</label>
          <FastField
            className="form-control"
            name="lastName"
            placeholder="Doe"
            component={Input}
            // as={Input}
            // as is 2.0 > version feature so use component
            disabled={isSubmitting}
          />

          <label htmlFor="email">Email</label>
          <FastField
            className="form-control"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            component={Input}
            // as={Input}
            // as is 2.0 > version feature so use component
            disabled={isSubmitting}
          />

          <label htmlFor="field">First Name</label>
          <Field
            className="form-control"
            name="field"
            placeholder="field"
            type="text"
            disabled={isSubmitting}
          />

          <button className="btn btn-primary m-2" type="submit">
            Submit
          </button>
          <Debug />
        </Form>
      )}
    </Formik>
    <Line />
  </>
);

export default Basic;
