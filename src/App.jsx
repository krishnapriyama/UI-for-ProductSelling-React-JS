import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './pages/homepage/homepage'
import ShopPage from './pages/shop-page/shop-page'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/shop'} element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
