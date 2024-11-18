import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvier from './AuthProvider/AuthProvier.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvier>
    <RouterProvider router={router} />
    </AuthProvier>
  </StrictMode>,
)
