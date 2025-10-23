import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx';
import { MobileMenu } from './components/MobileMenu.jsx';
import { Home } from './components/sections/Home.jsx';
import { About } from './components/sections/About.jsx';
import { Products } from './components/sections/Products.jsx';
import { Offer } from './components/sections/Offers.jsx';
import { Contacts } from './components/sections/Contacts.jsx';
import { Cakes } from './components/sections/Cake.jsx';
import { Meatpies } from './components/sections/Meatpie.jsx';
import { Doughnuts } from './components/sections/Doughnut.jsx';
import { Crunchies } from './components/sections/Crunchy.jsx';
import { Submeatpie } from './components/sections/subsection/Submeatpie.jsx';
import { Suboffer } from './components/sections/subsection/SubOffers.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/sections/Order.jsx';
import { ScrollToTop } from './components/sections/ScrollToTop.jsx';


import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="app-background">
        <div className="overlay"></div>
        <div className="content">
          <CartProvider>
            <Router basename="/Tife-debaker">
              <ScrollToTop />
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              < MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <Routes>
                <Route path="/" element={
                  <>
                    <Home />
                    <About />
                    <Products />
                    <Offer />
                    <Contacts />


                  </>
                } />
                <Route path="/cakes" element={<Cakes />} />
                <Route path="/meatpies" element={<Meatpies />} />
                <Route path="/submeatpies" element={<Submeatpie />} />
                <Route path="/suboffer" element={<Suboffer />} />
                <Route path="/doughnuts" element={<Doughnuts />} />
                <Route path="/crunchies" element={<Crunchies />} />

              </Routes>
            </Router>
          </CartProvider>
        </div>
      </div>
    </>
  );
}

export default App
