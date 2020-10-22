import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './copmonents/App/App';
import './i18n'



ReactDOM.render(
  <React.Suspense fallback="loading...">
    <App />
  </React.Suspense>,
  document.getElementById('root')
);

