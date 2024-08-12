import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Product} from './pages/Product'
import { Cart } from './pages/Cart'
import { useState } from 'react'


function App() {

  const [cart, setCart] = useState([])

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout cart={cart}/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/Product" element={<Product cart={cart} setCart={setCart}/>} />
            <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
