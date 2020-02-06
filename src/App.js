import React from 'react';
import Arrays from './components/Arrays';
import AsyncValidation from './components/AsyncValidation';
// import { AsyncSubmit } from './components/basic/';
import Checkbox from './components/Checkbox';
import CombinedValidations from './components/CombinedValidations';
import CustomInputs from './components/CustomInputs';
import ErrorMessage from './components/ErrorMessage';
import FastField from './components/FastField';
import FastFieldWebExample from './components/FastFieldWebExample';
import FieldLevelValidation from './components/FieldLevelValidation';
import MultistepWizard from './components/MultistepWizard';
import SchemaValidation from './components/SchemaValidation';
import SyncValidation from './components/SyncValidation';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree';

export default function App() {
	return (
		<div className="container">
			<div className="d-flex flex-row justify-content-center">
				<div className="col-2"></div>
				<div className="col-8">
					<Arrays />
					<AsyncValidation />
					<Checkbox />
					<CombinedValidations />
					<CustomInputs />
					<ErrorMessage />
					<FastField />
					{/* <FastFieldWebExample /> */}
					<FieldLevelValidation />
					<MultistepWizard />
					<SchemaValidation />
					<SyncValidation />
					<FormOne email="hello" />
					<FormTwo />
					<FormThree />
				</div>
				<div className="col-2"></div>
			</div>
		</div>
	);
}
