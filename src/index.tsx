import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/main.min.css'
import store from './store/store'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter/*  basename={process.env.PUBLIC_URL} */>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
