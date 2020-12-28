import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
function SignUp() {
	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};

	const schema = Yup.object().shape({
		/**
		 * the lowercase() will not work if we don't specify string() and strict()
		 */
		firstName: Yup.string().required('first name required'),
		lastName: Yup.string().required('last name required'),
		email: Yup.string().required('email required').email('invalid email'),
		password: Yup.string().required('password required'),
	});

	const handleSubmit = () => {
		alert('hi');
	};
	return (
		<div className="container">
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				{() => (
					<Form>
						<div className="form-group">
							<label htmlFor="firstName">First Name</label>
							<Field name="firstName" type="text" />
							<ErrorMessage name="firstName" component="div" />
						</div>
						<div className="form-group">
							<label htmlFor="lastName">Last Name</label>
							<Field name="lastName" type="text" />
							<ErrorMessage name="lastName" component="div" />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<Field name="email" type="text" />
							<ErrorMessage name="email" component="div" />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<Field name="password" type="password" />
							<ErrorMessage name="password" component="div" />
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary mr-2"
							>
								Sign Up
							</button>
							<button type="reset" className="btn btn-secondary">
								Reset
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default SignUp;
