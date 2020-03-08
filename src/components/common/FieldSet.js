import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

function Fieldset({ name, label, ...rest }) {
	return (
		<div className="form-group">
			{label && (
				<label
					className="mb-1 font-extra-small text-uppercase text-primary"
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<Field id={name} name={name} className="form-control" {...rest} />
			<ErrorMessage
				name={name}
				className="text-danger small"
				component="div"
			/>
		</div>
	);
}

Fieldset.propTypes = {
	name: PropTypes.string.isRequired,
};

Fieldset.defaultProps = {
	label: '',
	placeholder: '',
};

export default Fieldset;
