import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './components/pages/Home.jsx'
import { Route, Routes } from 'react-router'
import Catalogue from './components/pages/Catalogue.jsx'
import Categories from './components/pages/Categories.jsx'
import AboutUs from './components/pages/About Us.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import PublicLayout from './utils/PublicLayout.jsx'
import AdminLayout from './utils/AdminLayout.jsx'
import Dashboard from './components/admin/Dashboard/Dashboard.jsx'
import AdminProducts from './components/admin/AdminProducts/AdminProducts.jsx'
import AddProduct from './components/admin/AdminProducts/AddProduct.jsx'
import { ErrorProvider } from './contexts/ErrorContext.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <ErrorProvider>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalogue' element={<Catalogue />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Route>

                <Route path='/admin' element={<AdminLayout />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='products' element={<AdminProducts />} />
                    <Route path='products/add' element={<AddProduct />} />
                </Route>

            </Routes>
        </ErrorProvider>
    )
}

export default App
