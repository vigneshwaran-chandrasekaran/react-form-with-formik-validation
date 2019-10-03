import React from 'react';
// import FormOne from './components/FormOne';
// import FormTwo from './components/FormTwo';
// import FormThree from './components/FormThree';
// import Arrays from './components/Arrays';
// import AsyncSubmit from './components/AsyncSubmit';
// import AsyncValidation from './components/AsyncValidation';
// import Basic from './components/Basic';
// import Checkbox from './components/Checkbox';
// import CombinedValidations from './components/CombinedValidations';
// import CustomInputs from './components/CustomInputs';
// import ErrorMessage from './components/ErrorMessage';
// import FastField from './components/FastField';
// import FastFieldWebExample from './components/FastFieldWebExample';
// import FieldLevelValidation from './components/FieldLevelValidation';
// import MultistepWizard from './components/MultistepWizard';
// import SchemaValidation from './components/SchemaValidation';
import SyncValidation from './components/SyncValidation';


function Line() {
  return (<hr />);
}

export default function App() {
  return (
    <div className="container">
      <div className='d-flex flex-row justify-content-center'>
        <div className='col-2'></div>
        <div className='col-8'>
          {/* <FormOne email='hello' /> */}
          {/* <Line /> */}
          {/* <FormTwo /> */}
          {/* <Line /> */}
          {/* <FormThree /> */}
          {/* <Line /> */}
          {/* <Arrays /> */}
          {/* <Line /> */}
          {/* <AsyncSubmit /> */}
          {/* <AsyncValidation /> */}
          {/* <Basic /> */}
          {/* <Checkbox /> */}
          {/* <CombinedValidations /> */}
          {/* <CustomInputs /> */}
          {/* <ErrorMessage /> */}
          {/* <FastField /> */}
          {/* <FastFieldWebExample /> */}
          {/* <FieldLevelValidation /> */}
          {/* <MultistepWizard /> */}
          {/* <SchemaValidation /> */}
          <SyncValidation />
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  )
}