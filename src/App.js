import React from 'react';
// import FormOne from './components/FormOne';
// import FormTwo from './components/FormTwo';
// import FormThree from './components/FormThree';
// import CustomInputs from './components/CustomInputs';
import Arrays from './components/Arrays';
import AsyncSubmit from './components/AsyncSubmit';

function Line() {
  return (<hr />);
}

export default function App() {
  return (
    <div>
      {/* <FormOne email='hello' />
      <Line />
      <FormTwo />
      <Line /> */}
      {/* <FormThree /> */}
      {/* <CustomInputs />
      <Line />*/}
      <Arrays />
      <Line />
      <AsyncSubmit />
    </div>
  )
}