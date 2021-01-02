import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import store from './redux/store'
window.store = store;

ReactDOM.render(
    <App test='42' />,
    document.getElementById('root')
);