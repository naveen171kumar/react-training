import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import SimpleComponent from './components/simplecomponent/simplecomponent';

import SimpleCalculator from './components/simplecalculator/simplecalculator';
import ProductFormComponent from './components/productformcomponent/productformcomponent';
import LifeCycleParentComponent from './components/lifecyclehooks/lifecyclecompopnent';
import ServiceComponent from './components/servicecomponent/servicecomponent';
import ValidatorComponent from './components/formvalidations/validatorcomponent';
import * as serviceWorker from './serviceWorker';
// rdenering the Component
// parameter 1, is the component that is to be rendered
// parameter 2, the DOM element on which the component
// will be mounted for rendering
let message = "The Message from Root of the Applciation";
let value = 1000;
// the 'msg' will be used as a 'props' type
ReactDOM.render(
  <React.StrictMode>
    <ProductFormComponent></ProductFormComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
