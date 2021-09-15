import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../containers/App';
import store from '../redux/store';
import Modal from '../components/Modals/Blured';

export default () => (
  <Provider store={store}>
    <Router>
        <App />
        <Modal />
    </Router>
  </Provider>
);
