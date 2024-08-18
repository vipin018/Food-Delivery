import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app' >
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          {< Route path="/" element={<Home />} />  /* it means whenever we'll open home page it will open the "/" route */}
          {< Route path="/cart" element={<Cart />} />  /* it means whenever we'll open cart page it will open the "/cart" route */}
          {< Route path="/order" element={<PlaceOrder />} />  /* it means whenever we'll open placeOrder page it will open the "/order" route */}
          {< Route path="/verify" element={<Verify />} />  /* it means whenever we'll open placeOrder page it will open the "/verify" route */}
          {< Route path="/myorders" element={<MyOrders />} />  /* it means whenever we'll open placeOrder page it will open the "/verify" route */}

        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App