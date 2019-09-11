import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormOne = ({
    values,
    errors,
    touched,
    isSubmitting
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
                            {touched.email && errors.email && <div className='text-danger small my-2'>{errors.email}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <Field
                                type="password"
                                className="form-control"
                                id="pwd"
                                name="password"
                            />
                            {touched.password && errors.password && <div className='text-danger small my-2'>{errors.password}</div>}
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
                                <option value=''>Select your plan</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </Field>
                        </div>
                        {touched.plan && errors.plan && <div className='text-danger small my-2'>{errors.plan}</div>}
                        <button disabled={isSubmitting} type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

const FormOneFormik = withFormik({
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
        // we have added custom error messgae for email validation
        // default email validation error message is : `email must be a valid email`
        email: Yup.string().email('Please enter valid email').required(),
        password: Yup.string().min(5).required(),
        plan: Yup.string().required()
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        console.log({ values });
        setTimeout(() => {
            if (values.email === 'hello@gmail.com') {
                setErrors({
                    email: 'Email is already taken'
                });
            } else {
                resetForm();
            }
            setSubmitting(false);
        }, 2000);
    }
})(FormOne);

export default FormOneFormik;
