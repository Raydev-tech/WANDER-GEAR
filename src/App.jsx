import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import HomePage from "./pages/HomePage"
import FeaturedProducts from "./pages/FeaturedProducts"
import Testimonials from "./pages/Testimonials"
import AboutUs from "./pages/AboutUs "
import ContactUs from "./pages/ContactUs"
import Footer from "./component/Footer"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"


function App() {

  return (
    <>
     <Navbar />
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<FeaturedProducts />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
       </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
