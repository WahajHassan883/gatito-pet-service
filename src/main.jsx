import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Loader from './ui/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Loader>
        <App />
      </Loader>
    </BrowserRouter>
  </React.StrictMode>,
);
