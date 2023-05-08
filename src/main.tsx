import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.scss';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css';
import './styles/slide.scss';
import './styles/section.scss';
import './styles/rs-plugin/css/settings.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
