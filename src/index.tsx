import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

/**
 * React Architecture
 * there is a lot of way how to pass data to application from backend without request
 * Here is only proposition, that backend is producting <template> or <script> tag with parsed JSON
 * then we are just gathering this data and adding to application
 */
const visits = document.getElementById('data-visits') && document.getElementById('data-visits')!.innerHTML;
const questions = document.getElementById('data-question') && document.getElementById('data-question')!.innerHTML;

ReactDOM.render(<App appData={{visits, questions}} />, document.getElementById('react-app'));
