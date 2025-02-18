import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'; 
import App from '/src/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/contactus">
      <App />
    </BrowserRouter>
  </StrictMode>,
);