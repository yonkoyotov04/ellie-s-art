import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AdminProvider } from './contexts/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AdminProvider>
            <App />
        </AdminProvider>
    </BrowserRouter>,
)
