import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
import AllInOneValidation from './components/AllInOneValidation';

function ExampleValidations() {
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

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">All validations in one page</Link>
						</li>
						<li>
							<Link to="/exampleValidations">
								Example Validations
							</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
			  renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/exampleValidations">
						<ExampleValidations />
					</Route>
					<Route path="/">
						<AllInOneValidation />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
