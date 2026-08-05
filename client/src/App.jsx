import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './components/pages/Home.jsx'
import { Route, Routes } from 'react-router'
import Posts from './components/pages/Posts.jsx'
import Catalogue from './components/pages/Catalogue.jsx'
import Categories from './components/pages/Categories.jsx'
import AboutUs from './components/pages/About Us.jsx'
import Register from './components/auth/Register.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/catalogue' element={<Catalogue />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
