import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Debug } from './Debug';
import Line from './Line';

const Schema = Yup.object().shape({
	password: Yup.string().required('Password is required'),
	passwordConfirmation: Yup.string()
		.required('passwordConfirmation is required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
								<label htmlFor="password">password</label>
								<div>
									<Field
										className="form-control"
										name="password"
										// validate={isRequired(
										// 	'password is required'
										// )}
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
										// validate={isRequired(
										// 	'passwordConfirmation is required'
										// )}
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
