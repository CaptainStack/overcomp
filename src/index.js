import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducer';
import {trackMouse} from './events';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').addEventListener('mousemove', (e) => {
    trackMouse(e);
  });
}, false);

export const store = createStore(reducer);

const render = () => ReactDOM.render(<App state={store.getState()} />, document.getElementById('root'));
render();
store.subscribe(render);
