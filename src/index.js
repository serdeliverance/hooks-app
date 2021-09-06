import React from 'react';
import ReactDOM from 'react-dom';
// import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { HooksApp } from './HooksApp';

ReactDOM.render(
  <RealExampleRef />,
  document.getElementById('root')
);