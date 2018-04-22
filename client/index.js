import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

ReactDOM.render(
    <App data={window.__PRELOADED_STATE__}/>,
    document.getElementById('root')
);


