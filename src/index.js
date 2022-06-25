import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AuthProvider from './context/AuthContext'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();