import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ModuleTitle = (props) => {
  return <b>Welcome to the {props.name} Module!</b>
}

root.render(
  <>
  <ModuleTitle name="Front End Development" />
  </>
);

