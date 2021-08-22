import reportWebVitals from './reportWebVitals';
import { Router, View } from 'react-navi';
import { routes } from './router';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import { isDevelopment } from './utils/environmentUtils';
import { Layout } from './components/Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Router routes={routes}>
      <Layout>
        <React.Suspense fallback={null}>
          <View />
        </React.Suspense>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if( isDevelopment() ) {
  reportWebVitals(console.log);
}
