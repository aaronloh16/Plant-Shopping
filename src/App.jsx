import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Layout } from './components/Layout'
import { Contact } from './pages/Contact'
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
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/Product" element={<Product cart={cart} setCart={setCart}/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
