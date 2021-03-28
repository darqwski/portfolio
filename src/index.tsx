import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

/**
 * React Architecture
 * there is a lot of way how to pass data to application from backend without request
 * Here is only proposition, that backend is producting <template> or <script> tag with parsed JSON
 * then we are just gathering this data and adding to application
 */
const data = document.getElementById('react-data') && document.getElementById('react-data')!.innerHTML;

ReactDOM.render(<App appData={data} />, document.getElementById('react-app'));
