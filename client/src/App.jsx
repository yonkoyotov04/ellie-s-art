import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './components/pages/Home.jsx'
import { Route, Routes } from 'react-router'
import Posts from './components/pages/Posts.jsx'
import Catalogue from './components/pages/Catalogue.jsx'

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
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
