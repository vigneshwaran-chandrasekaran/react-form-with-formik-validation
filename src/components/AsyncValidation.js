import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Debug } from './Debug';
import Line from './Line';

// Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => {
	return sleep(300).then(res => {
		console.log(res);
		let errors = {};

		if (['admin', 'null', 'god'].includes(values.username)) {
			errors.username = 'Nice try';
		}

		if (!values.username) {
			errors.username = 'Required';
		}

		if (Object.keys(errors).length) {
			throw errors;
		}
	});
};

const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
	console.log('handleOnSubmit');
	console.log({ values });
	sleep(500).then(() => {
		alert(JSON.stringify(values, null, 2));
		resetForm();
		setSubmitting(false);
	});
};

const initialValues = {
	username: '',
};

const Username = () => (
	<>
		<h3 className="AsyncValidation">AsyncValidation Pick a username</h3>
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={handleOnSubmit}
		>
			{({ isSubmitting, handleReset, errors, touched }) => (
				<Form>
					<label htmlFor="username">Username</label>
					<Field
						className="form-control"
						name="username"
						type="text"
					/>
					<ErrorMessage
						className="text-danger small"
						component="div"
						name="username"
					/>
					<button
						className="btn btn-primary m-2"
						type="submit"
						disabled={isSubmitting}
					>
						Submit
					</button>
					<button
						type="reset"
						className="btn btn-warning m-2"
						disabled={isSubmitting}
						onClick={handleReset}
					>
						Reset
					</button>
					<Debug />
				</Form>
			)}
		</Formik>
		<Line />
	</>
);

export default Username;
