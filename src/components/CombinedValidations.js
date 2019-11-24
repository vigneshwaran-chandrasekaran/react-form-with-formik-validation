import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Debug } from "./Debug";
import Line from "./Line";

const Schema = Yup.object().shape({
  email: Yup.string().required("This field is required")
});

// Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => console.log({ values });
sleep(300).then(() => {
  let errorMessage = { zip: "This field is required" };
  throw errorMessage;
});

const isRequired = message => value => (!!value ? undefined : message);

const FieldLevelValidation = () => (
  <>
    <h3>CombinedValidations Pick a username</h3>
    <Formik
      validationSchema={Schema}
      validate={validate}
      initialValues={{
        username: "",
        email: "",
        zip: ""
      }}
      onSubmit={values => {
        sleep(500).then(() => {
          alert(JSON.stringify(values, null, 2));
        });
      }}
    >
      {({
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        validateField,
        validateForm
      }) => (
        <Form>
          <label htmlFor="username">Username</label>
          <div>
            <Field
              className="form-control"
              name="username"
              validate={isRequired("This field is required")}
              type="text"
              placeholder="username"
            />
            <ErrorMessage
              className="text-danger small"
              component="div"
              name="username"
            />
          </div>
          <br />
          <div>
            <Field
              className="form-control"
              name="email2"
              validate={isRequired("This field is required")}
              type="text"
              placeholder="email"
            />
            <ErrorMessage
              className="text-danger small"
              component="div"
              name="email"
            />
          </div>
          <br />
          <div>
            <Field
              className="form-control"
              name="zip"
              validate={isRequired("This field is required")}
              type="text"
              placeholder="zip"
            />
            <ErrorMessage
              className="text-danger small"
              component="div"
              name="zip"
            />
          </div>
          <br />
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

export default FieldLevelValidation;
