import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import HomePage from './pages/Homepage'
import CartPage from './pages/Cartpage'
import CataloguePage from './pages/CataloguePage'
import CabinetPage from './pages/CabinetPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/' element={<Homepage></Homepage>} />
      </Routes>
    </>
  )
}

export default App
