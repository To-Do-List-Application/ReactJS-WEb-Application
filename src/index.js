import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    // react application start
  <React.StrictMode>
      {/*start app.js*/}
    <App />
  </React.StrictMode>,
    // get rootid
  document.getElementById('root')
);



