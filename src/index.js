import React from 'react';
import ReactDOM from 'react-dom/client';
import Clicky from './exampleFunctions/Clicky';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const ModuleTitle = (props) => {
//   return <b>Welcome to the {props.name} Module!</b>
// }

root.render(
  <>
  <Clicky />
  </>
);

