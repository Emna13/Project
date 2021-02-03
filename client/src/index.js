import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './js/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


