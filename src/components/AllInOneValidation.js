import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Debug } from './Debug';
import Line from './Line';

/**
 * https://codesandbox.io/s/l2r832l8x7
 *
 * https://itnext.io/simple-react-form-validation-with-formik-yup-and-or-spected-206ebe9e7dcc
 * https://www.reactnativeschool.com/build-and-validate-forms-with-formik-and-yup/checking-field-equality-confirm-password
 */

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Schema = Yup.object().shape({
	userName: Yup.string()
		.required('No userName provided.')
		.min(8, 'userName is too short - should be 8 chars minimum.'),
	passwordConfirmation: Yup.string()
		.required('passwordConfirmation is required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
	email: Yup.string()
		.email()
		.required(),

	password: Yup.string().required('This field is required'),
	changepassword: Yup.string().when('password', {
		is: val => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf(
			[Yup.ref('password')],
			'Both password need to be the same'
		),
	}),
	phoneNumber: Yup.string()
		.required('Phone number is required')
		.matches(phoneRegExp, 'Phone number is not valid'),
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
							phoneNumber: undefined,
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
								<div>
									<label htmlFor="phoneNumber">
										Phone Number
									</label>
									<Field
										className="form-control"
										name="phoneNumber"
										placeholder="phoneNumber"
									/>
									<ErrorMessage
										className="text-danger small"
										component="div"
										name="phoneNumber"
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
