import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import './index.css';
import App from './App';


ReactDOM.render(<App store={store}/>, document.getElementById('root'));


