import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import HomePage from "./pages/homepage.js";
import ProductPage from "./pages/productPage.js";
import CartPage from "./pages/cartPage.js";
import CartSuccessPage from "./pages/cartSuccessPage.js";
import ContactPage from "./pages/contactPage.js";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/cart-success" element={<CartSuccessPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>
        
    );
};

export default App;