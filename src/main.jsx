import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Zero.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { mainReducer } from './store/mainSlice.js'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore({
  reducer: {
    main : mainReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
