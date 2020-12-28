import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AllInOneValidation from './components/AllInOneValidation';
import Arrays from './components/Arrays';
import AsyncValidation from './components/AsyncValidation';
// import { AsyncSubmit } from './components/basic/';
import Checkbox from './components/Checkbox';
import CombinedValidations from './components/CombinedValidations';
import CustomInputs from './components/CustomInputs';
import ErrorMessage from './components/ErrorMessage';
import FastField from './components/FastField';
import FieldLevelValidation from './components/FieldLevelValidation';
import FormOne from './components/FormOne';
import FormThree from './components/FormThree';
import FormTwo from './components/FormTwo';
import MultistepWizard from './components/MultistepWizard';
import SchemaValidation from './components/SchemaValidation';
import SignUp from './components/SignUp';
import SyncValidation from './components/SyncValidation';

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
							<Link to="/">
								All major validations in one form
							</Link>
						</li>
						<li>
							<Link to="/exampleValidations">
								Example Validations
							</Link>
						</li>
						<li>
							<Link to="/signUp">sign up</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
			  renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/">
						<AllInOneValidation />
					</Route>
					<Route exact path="/exampleValidations">
						<ExampleValidations />
					</Route>
					<Route exact path="/signUp">
						<SignUp />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
