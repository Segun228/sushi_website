import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import HomePage from './pages/Homepage'
import CartPage from './pages/Cartpage'
import CataloguePage from './pages/CataloguePage'
import CabinetPage from './pages/CabinetPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/layout/Layout'
function App() {


  return (
    <>
      
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>} />
          <Route path='/catalogue' element={<CataloguePage></CataloguePage>} />
          <Route path='/cart' element={<CartPage></CartPage>} />
          <Route path='/cabinet' element={<CabinetPage></CabinetPage>} />
          <Route path='*' element={<NotFoundPage></NotFoundPage>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
