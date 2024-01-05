import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddPRoduct from './pages/AddPRoduct'
import SinglePage from './pages/SinglePage'

const AllRoute = () => {
  return (
   <Routes>


    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/addproduct' element={<AddPRoduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/product/:id' element={<SinglePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    
   </Routes>
  )
}

export default AllRoute