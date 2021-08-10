import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'

import finalExport from './redux/store-reducer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={finalExport.store}>
    <BrowserRouter>
    <PersistGate persistor={finalExport.persist}>
    <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

