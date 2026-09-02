import './App.css'
import Home from './components/pages/Home.jsx'
import { Route, Routes } from 'react-router'
import Catalogue from './components/pages/Catalogue.jsx'
import AboutUs from './components/pages/About Us.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import PublicLayout, { GuestRoutes } from './utils/PublicLayout.jsx'
import AdminLayout, { AdminRoutes } from './utils/AdminLayout.jsx'
import Dashboard from './components/admin/Dashboard/Dashboard.jsx'
import AdminProducts from './components/admin/AdminProducts/AdminProducts.jsx'
import AddProduct from './components/admin/AdminProducts/AddProduct.jsx'
import { ErrorProvider } from './contexts/ErrorContext.jsx'
import ProductDetails from './components/products/ProductDetails.jsx'
import Categories from './components/categories/Categories.jsx'
import EditProduct from './components/admin/AdminProducts/EditProduct.jsx'

function App() {

    return (
        <ErrorProvider>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalogue' element={<Catalogue />} />
                    <Route path='/catalogue/:category' element={<Catalogue />} />
                    <Route path='/product/:productId/details' element={<ProductDetails />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/about' element={<AboutUs />} />
                </Route>

                <Route element={<GuestRoutes />}>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Route>

                <Route element={<AdminRoutes />}>
                    <Route path='/admin' element={<AdminLayout />}>
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='products' element={<AdminProducts />} />
                        <Route path='addProduct' element={<AddProduct />} />
                        <Route path='products/:productId/edit' element={<EditProduct />} />
                    </Route>
                </Route>


            </Routes>
        </ErrorProvider>
    )
}

export default App
