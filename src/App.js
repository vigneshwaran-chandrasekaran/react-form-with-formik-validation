import React from 'react';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
// import FormThree from './components/FormThree';
// import CustomInputs from './components/CustomInputs';
import Arrays from './components/Arrays';
import AsyncSubmit from './components/AsyncSubmit';
import AsyncValidation from './components/AsyncValidation';
import Basic from './components/Basic';
import Checkbox from './components/Checkbox';

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
          {/* <CustomInputs />*/}
          {/* <Line /> */}
          {/* <Arrays /> */}
          {/* <Line /> */}
          {/* <AsyncSubmit /> */}
          {/* <AsyncValidation /> */}
          {/* <Basic /> */}
          <Checkbox />
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  )
}