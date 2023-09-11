import React from 'react'

import { Route, BrowserRouter,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Home from './components/Home'
import Error from './components/Error'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css" 
import Login from './components/Login'
import Register from './components/Register'
import SearchFeature from './components/SearchFeature'
import Popup from './components/Popup'
import ReactMagnifier from './components/ReactMagnifier'
import Latest from './components/Latest'
function App() {
    return (
        <>
            <BrowserRouter>
            <ToastContainer/>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/cart/:id' element={<Cart/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/search' element={<SearchFeature/>}/>
                    <Route path='/popup' element={<Popup/>}/>
                    <Route path='/magnifier' element={<ReactMagnifier/>}/>
                    <Route path='/latest' element={<Latest/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App