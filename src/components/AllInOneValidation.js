import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Debug } from './Debug';
import Line from './Line';

const Schema = Yup.object().shape({
	userName: Yup.string()
		.required('No userName provided.')
		.min(8, 'userName is too short - should be 8 chars minimum.')
		.matches(/[a-zA-Z]/, 'userName can only contain Latin letters.'), // not working change this later
	password: Yup.string()
		.required('Password is required')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Invalid'
		), // not working change this later
	passwordConfirmation: Yup.string()
		.required('passwordConfirmation is required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
	email: Yup.string()
		.email()
		.required(),
});

// Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => console.log({ values });

const isRequired = message => value => (!!value ? undefined : message);

const AllInOneValidation = () => (
	<>
		<div className="container">
			<div className="d-flex flex-row justify-content-center">
				<div className="col-2"></div>
				<div className="col-8">
					<h3 className="AllInOneValidation">
						All validations in one file
					</h3>
					<Formik
						validationSchema={Schema}
						validate={validate}
						initialValues={{
							userName: undefined,
							password: undefined,
							passwordConfirmation: undefined,
						}}
						onSubmit={values => {
							sleep(500).then(() => {
								alert(JSON.stringify(values, null, 2));
							});
						}}
					>
						{() => (
							<Form>
								<div>
									<label htmlFor="userName">userName</label>
									<Field
										className="form-control"
										name="userName"
										placeholder="userName"
									/>
									<ErrorMessage
										className="text-danger small"
										component="div"
										name="userName"
									/>
								</div>
								<br />

								<label htmlFor="password">password</label>
								<div>
									<Field
										className="form-control"
										name="password"
										type="password"
										placeholder="password"
									/>
									<ErrorMessage
										className="text-danger small"
										component="div"
										name="password"
									/>
								</div>

								<br />
								<div>
									<label htmlFor="passwordConfirmation">
										Password Confirmation
									</label>
									<Field
										className="form-control"
										name="passwordConfirmation"
										type="password"
										placeholder="passwordConfirmation"
									/>
									<ErrorMessage
										className="text-danger small"
										component="div"
										name="passwordConfirmation"
									/>
								</div>
								<br />
								<button
									className="btn btn-primary m-2"
									type="submit"
								>
									Submit
								</button>
								<Debug />
							</Form>
						)}
					</Formik>
					<Line />
				</div>
				<div className="col-2"></div>
			</div>
		</div>
	</>
);

export default AllInOneValidation;
