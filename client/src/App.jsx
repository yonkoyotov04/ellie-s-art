import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './components/pages/Home.jsx'
import { Route, Routes } from 'react-router'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
