import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import HomePage from "./pages/homepage.js";
import ProductPage from "./pages/productPage.js";
import CartPage from "./pages/cartPage.js";
import CartSuccessPage from "./pages/cartSuccessPage.js";
import ContactPage from "./pages/contactPage.js";
import { CartProvider } from "./functionality/cartContext.js"; 

const App = () => {
    return (
        <CartProvider> {}
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/cart-success" element={<CartSuccessPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;