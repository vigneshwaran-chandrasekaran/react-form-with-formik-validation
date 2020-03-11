import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Debug } from './Debug';
import Line from './Line';
import Fieldset from '../components/common/FieldSet';

/**
 * https://codesandbox.io/s/l2r832l8x7
 *
 * https://itnext.io/simple-react-form-validation-with-formik-yup-and-or-spected-206ebe9e7dcc
 * https://www.reactnativeschool.com/build-and-validate-forms-with-formik-and-yup/checking-field-equality-confirm-password
 */

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const users = [
	{ id: 1, name: 'Tamilnadu' },
	{ id: 2, name: 'Germany' },
	{ id: 3, name: 'Vigneshwaran' },
];

const Schema = Yup.object().shape({
	/**
	 * the lowercase() will not work if we don't specify string() and strict()
	 */
	userName: Yup.string()
		.strict()
		.required('No userName provided.')
		.trim('There is empty space')
		.lowercase('plese use all lowercase')
		.min(5, 'userName is too short - should be 5 chars minimum.')
		.test('checkUserNameTaken', 'Username already taken', function(value) {
			// https://medium.com/@arkadyt/how-does-yup-addmethod-work-creating-custom-validation-functions-with-yup-8fddb71a5470
			return !users.some(user => user.name === value);
		}),
	passwordConfirmation: Yup.string()
		.required('passwordConfirmation is required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
	// email: Yup.string()
	// 	.email()
	// 	.required(),

	password: Yup.string().required('Password required'),
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
	age: Yup.number()
		.required('Age required')
		.min(18, 'Mininum age is 18')
		.max(100, 'Mininum age is 100')
		.positive('Positive numbers only allowed'),
	price: Yup.number()
		.lessThan(200, 'Price should be less than 200')
		.moreThan(0, 'Price should more than 0')
		.integer('Integer only allowed'),
	total: Yup.number().truncate(),
	/**
	 * negative, truncate, round
	 */
});

// Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => console.log({ values });

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
							userName: '',
							password: '',
							passwordConfirmation: '',
							phoneNumber: '',
							age: '',
						}}
						/**
						 * Here we are using '' as initial value if you set undefined as initial
						 * value it will show error `A component is changing an uncontrolled
						 * input of type undefined to be controlled.`
						 */
						onSubmit={values => {
							sleep(500).then(() => {
								alert(JSON.stringify(values, null, 2));
							});
						}}
					>
						{() => (
							<Form>
								<p className="text-info">
									If we type Tamilnadu or Germany it will show
									username already taken error message
								</p>

								<Fieldset name="userName" label="Username" />

								<Fieldset
									type="password"
									name="password"
									label="Password"
								/>

								<Fieldset
									type="password"
									name="passwordConfirmation"
									label="Password Confirmation"
								/>

								<Fieldset
									name="phoneNumber"
									label="Phone Number"
								/>

								<Fieldset name="age" label="Age" />
								<Fieldset name="price" label="Price" />
								<Fieldset name="total" label="Total" />

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
