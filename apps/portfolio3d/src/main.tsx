import { StrictMode } from 'react';
import './main.css';
import * as ReactDOM from 'react-dom/client';
import { App } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
