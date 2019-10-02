// https://github.com/jaredpalmer/formik/blob/master/examples/Arrays.js

// in this component we add dynamic fields when we click button and we can remove that field row also

import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Debug } from './Debug';

const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};

// within a `FieldArray`'s render
const FriendArrayErrors = ({ errors }) =>
    typeof errors.friends === 'string' ? <div className='text-danger small'>{errors.friends}</div> : null;

// https://github.com/jquense/yup/issues/345#issuecomment-487320558

// custom method to check if array contains any duplicate email address
Yup.addMethod(Yup.array, 'unique', function (message, mapper = a => a) {
    return this.test('unique', message, function (list) {
        return list.length === new Set(list.map(mapper)).size;
    });
});

const validationSchema = Yup.object().shape({
    friends: Yup.array()
        .of(
            Yup.object().shape({
                name: Yup.string()
                    .min(4, 'too short')
                    .required('Name Required'), // these constraints take precedence
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Email Required'), // these constraints take precedence
            })
        )
        .unique('duplicate email', a => a.email)
        .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
        .min(3, 'Minimum of 3 friends'),
});

const Arrays = () => (
    <>
        <h1 className='text-center mb-3'>Arrays Dyanmic Field object</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            render={({
                values,
                errors,
                touched,
                isSubmitting }) => (
                    <Form>
                        <FieldArray
                            name="friends"
                            render={({ insert, remove, push }) => (
                                <div>
                                    {values.friends.length > 0 &&
                                        values.friends.map((friend, index) => (
                                            <div className="d-flex align-items-center" key={index}>
                                                <div className="col">
                                                    <label htmlFor={`friends.${index}.name`}>Name</label>
                                                    <Field
                                                        name={`friends.${index}.name`}
                                                        placeholder="Jane Doe"
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        name={`friends.${index}.name`}
                                                        component="div"
                                                        className='text-danger small'
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor={`friends.${index}.email`}>Email</label>
                                                    <Field
                                                        name={`friends.${index}.email`}
                                                        placeholder="jane@acme.com"
                                                        type="email"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        name={`friends.${index}.email`}
                                                        component="div"
                                                        className='text-danger small'
                                                    />
                                                </div>
                                                <div className="col">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => {
                                                            if (values.friends.length > 1) {
                                                                return remove(index)
                                                            }
                                                        }}
                                                    >X</button>
                                                </div>
                                            </div>
                                        ))}
                                    <button
                                        type="button"
                                        className="btn btn-warning btn-sm mt-2"
                                        onClick={() => push({ name: '', email: '' })}
                                    >Add Friend</button>
                                </div>
                            )}
                        />
                        <button type="submit" className="btn btn-primary mt-2">Invite</button>
                        <FriendArrayErrors errors={errors} />
                        {/* <p>{JSON.stringify(errors, null, 2)}</p>
                                    <p>{JSON.stringify(values, null, 2)}</p> */}
                        <Debug />
                    </Form>
                )}
        />
    </>
);

export default Arrays;