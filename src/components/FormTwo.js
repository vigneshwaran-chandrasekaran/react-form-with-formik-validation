import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Error from './Error';

const validationSchema = Yup.object().shape({
    userName: Yup.string()
        .min(1)
        .max(15)
        .required(),
    email: Yup.string()
        .email()
        .min(1)
        .max(15)
        .required()
});

export default function FormTwo() {
    return (
        <div className="container">
            <div className='d-flex flex-row justify-content-center'>
                <div className='col-2'></div>
                <div className='col-6'>
                    <Formik
                        initialValues={{
                            email: '',
                            userName: ''
                        }}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleBlur }) => (
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email address:</label>
                                    <Field
                                        type="email"
                                        className={"form-control " + (touched.email && errors.email ? 'border-danger' : '')}
                                        id="email"
                                        name="email"
                                        placeholder='Enter your email'
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    <Error touched={touched.email} message={errors.email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='userName'>Name</label>
                                    <input
                                        type='text'
                                        className={"form-control " + (touched.userName && errors.userName ? 'border-danger' : '')}
                                        id='userName'
                                        name='userName'
                                        placeholder='Enter your name'
                                        value={values.userName}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    <Error touched={touched.userName} message={errors.userName} />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                {JSON.stringify(values)}
                            </form>
                        )}
                    </Formik>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    )
}
