// https://github.com/jaredpalmer/formik/blob/master/examples/CustomInputs.js

// in this component Fieldset concept is used to group the Field label and errormessage

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Debug } from './Debug';
import Line from './Line';

// By combining a vanilla <label> plus Formik's <Field> and <ErrorMessage>,
// we can abstract a generic "Fieldset" component for most of our inputs.
const Fieldset = ({ name, label, ...rest }) => (
	<div className="form-group">
		<label htmlFor={name}>{label}</label>
		<Field id={name} name={name} {...rest} />
		<ErrorMessage
			name={name}
			className="text-danger small"
			component="div"
		/>
	</div>
);

const initialValues = {
	email: 'vigneshwaran@chandrasekaran.com',
	color: 'red',
	animal: '',
	website: 'https://github.com/vigneshwaran-chandrasekaran',
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Required'),
	color: Yup.string().required('Required'),
	website: Yup.string()
		.url('Invalid URL')
		.required('Required'),
	animal: Yup.string().required('Required'),
});

function onSubmitHandle(values) {
	console.log('onSubmitHandle');
	console.log({ values });
	setTimeout(() => {
		alert(JSON.stringify(values, null, 2));
	}, 500);
}

// on component load list of values
// we can get this details from api call also
const animalsList = [
	{
		id: 1,
		value: 'Tiger',
	},
	{
		id: 2,
		value: 'Lion',
	},
	{
		id: 3,
		value: 'Dog',
	},
	{
		id: 4,
		value: 'Cat',
	},
];

// generage select dropdown option list dynamically
function Options({ options }) {
	return options.map(option => (
		<option key={option.id} value={option.value}>
			{option.value}
		</option>
	));
}

const CustomInputs = () => (
	<>
		<h3 className="text-center mb-3">
			(CustomInputs) Grouping fields, dynamic select options
		</h3>
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmitHandle}
		>
			{({ isSubmitting, handleReset }) => (
				<Form>
					<Fieldset
						name="email1"
						type="email"
						label="Email"
						placeholder="jane@acme.com"
						className="form-control"
					/>
					<Fieldset
						name="color"
						className="form-control"
						label="Favorite Color"
						component="select"
					>
						<option value="">Select a Color</option>
						<option value="red">Red</option>
						<option value="green">Green</option>
						<option value="blue">Blue</option>
					</Fieldset>

					<Fieldset
						name="website"
						type="url"
						label="Website"
						placeholder="https://example.com"
						className="form-control"
					/>

					<Fieldset
						name="animal"
						className="form-control"
						as="select"
						label="Favorite Animal"
					>
						<option value="">Select an animal</option>
						<option value="tiger">Tiger</option>
						<option value="bear">Bear</option>
						<option value="shark">Shark</option>
						<Options options={animalsList} />
					</Fieldset>

					<button
						type="reset"
						className="btn btn-warning m-2"
						disabled={isSubmitting}
						onClick={handleReset}
					>
						Reset
					</button>

					<button type="submit" className="btn btn-primary m-2">
						Submit
					</button>

					<Debug />
				</Form>
			)}
		</Formik>
		<Line />
	</>
);

export default CustomInputs;
