import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducer';

export const store = createStore(reducer);
export const roster = store.getState();

const render = () => ReactDOM.render(<App roster={roster} />, document.getElementById('root'));
render();
store.subscribe(render);
