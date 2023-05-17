import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { JournailApp } from './JournailApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JournailApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
