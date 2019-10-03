import React from 'react';
import { Formik, Field, FastField, Form } from 'formik';
import * as Yup from 'yup';
import Line from './Line';

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

const Basic = () => (
    <>
        <h3>(FastFieldWebExample) Sign Up</h3>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string().required(),
                middleInitial: Yup.string(),
                lastName: Yup.string().required(),
                email: Yup.string()
                    .email()
                    .required(),
            })}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            render={({ errors, touched, form }) => (
                <Form>
                    {/** This <FastField> only updates for changes made to
           values.firstName, touched.firstName, errors.firstName */}
                    <label htmlFor="firstName">First Name</label>
                    <FastField
                        className="form-control"
                        name="firstName"
                        placeholder="Weezy"
                        component={Input}
                    />

                    {/** Updates for all changes because it's from the
           top-level formikProps which get all updates */}
                    {touched.firstName &&
                        errors.firstName && <div>{errors.firstName}</div>}

                    <label htmlFor="middleInitial">Middle Initial</label>
                    <FastField
                        className="form-control"
                        name="middleInitial"
                        placeholder="F"
                        render={({ field, form }) => (
                            <div>
                                <input {...field} />
                                {/**
                 * This updates normally because it's from the same slice of Formik state,
                 * i.e. path to the object matches the name of this <FastField />
                 */}
                                {form.touched.middleInitial ? form.errors.middleInitial : null}

                                {/** This won't ever update since it's coming from
                 from another <Field>/<FastField>'s (i.e. firstName's) slice   */}
                                {form.touched.firstName && form.errors.firstName
                                    ? form.errors.firstName
                                    : null}

                                {/* This doesn't update either */}
                                {form.submitCount}

                                {/* Imperative methods still work as expected */}
                                <button
                                    className="btn btn-warning"
                                    type="button"
                                    onClick={form.setFieldValue('middleInitial', 'J')}
                                >
                                    J
                </button>
                            </div>
                        )}
                    />

                    {/** Updates for all changes to Formik state
           and all changes by all <Field>s and <FastField>s */}
                    <label htmlFor="lastName">LastName</label>
                    <Field
                        className="form-control"
                        name="lastName"
                        placeholder="Baby"
                        render={({ field, form }) => (
                            <div>
                                <input {...field} />
                                {/** Works because this is inside
                 of a <Field/>, which gets all updates */}
                                {form.touched.firstName && form.errors.firstName
                                    ? form.errors.firstName
                                    : null}
                            </div>
                        )}
                    />

                    {/** Updates for all changes to Formik state and
           all changes by all <Field>s and <FastField>s */}
                    <label htmlFor="email">Email</label>
                    <Field className="form-control"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email" />

                    <button className="btn btn-primary m-2" type="submit">Submit</button>
                </Form>
            )}
        />
        <Line />
    </>
);

export default Basic;