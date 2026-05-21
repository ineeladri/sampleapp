import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

    return (

        <BrowserRouter>

            <div style={{padding:'20px'}}>

                <h1>Azure Ecommerce Application</h1>

                <nav style={{
                    display:'flex',
                    gap:'20px',
                    marginBottom:'20px'
                }}>

                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>

                </nav>

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/products" element={<Products />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/contact" element={<Contact />} />

                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;