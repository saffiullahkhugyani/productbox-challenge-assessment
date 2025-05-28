import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import { Route, Routes } from 'react-router-dom'
import AddItems from './pages/addItems'
import Items from './pages/items'
import Checkout from './pages/checkout'
import HomePage from './pages/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100'>
      {/* nav bar*/}
      <Nav />
      
      {/* main content */}
      <div>
        <Routes>
          <Route path='/homePage' element={<HomePage />} />
          <Route path="/addItems" element={<AddItems/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/checkout" element={<Checkout/>} /> 
        </Routes>
      </div>
    </div>
  )
}

export default App
