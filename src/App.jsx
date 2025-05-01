import { useEffect, useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import CartPage from './pages/cartPage/CartPage'
import CataloguePage from './pages/cataloguePage/CataloguePage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import Layout from './components/layout/Layout'
import catalogueRequest from './requests/catalogueRequest.js'
import { useDispatch } from 'react-redux'
import { setCatalogue } from './store/mainSlice.js'
function App() {
  

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={
              <>
                <HomePage></HomePage>
              </>
              
              } />
            <Route path='/catalogue' element={
              <CataloguePage></CataloguePage>
              } />
            <Route path='/cart' element={<CartPage></CartPage>} />
            <Route path='*' element={<NotFoundPage></NotFoundPage>} />
          </Route>
        </Routes>
    </>
  )
}

export default App
