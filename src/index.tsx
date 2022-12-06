import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/index.scss';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
