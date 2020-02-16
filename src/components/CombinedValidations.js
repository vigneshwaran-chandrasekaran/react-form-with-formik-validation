import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Debug } from './Debug';
import Line from './Line';

const Schema = Yup.object().shape({
	email2: Yup.string().required('This field is required'),
});

// Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => console.log({ values });

const isRequired = message => value => (!!value ? undefined : message);

const FieldLevelValidation = () => (
	<>
		<h3 className="CombinedValidations">
			CombinedValidations Pick a username2
		</h3>
		<Formik
			validationSchema={Schema}
			validate={validate}
			initialValues={{
				username2: '',
				email2: '',
				zip2: '',
			}}
			onSubmit={values => {
				sleep(500).then(() => {
					alert(JSON.stringify(values, null, 2));
				});
			}}
		>
			{() => (
				<Form>
					<label htmlFor="username2">username2</label>
					<div>
						<Field
							className="form-control"
							name="username2"
							validate={isRequired('This field is required')}
							type="text"
							placeholder="username2"
						/>
						<ErrorMessage
							className="text-danger small"
							component="div"
							name="username2"
						/>
					</div>
					<br />
					<div>
						<Field
							className="form-control"
							name="email2"
							validate={isRequired('This field is required')}
							type="text"
							placeholder="email"
						/>
						<ErrorMessage
							className="text-danger small"
							component="div"
							name="email2"
						/>
					</div>
					<br />
					<div>
						<Field
							className="form-control"
							name="zip2"
							validate={isRequired('This field is required')}
							type="text"
							placeholder="zip2"
						/>
						<ErrorMessage
							className="text-danger small"
							component="div"
							name="zip2"
						/>
					</div>
					<br />
					<button
						className="btn btn-primary m-2 CombinedValidationsBtn"
						type="submit"
					>
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
