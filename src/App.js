import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.js";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/productPage";
import CartPage from "./pages/cartPage";
import CartSuccessPage from "./pages/cartSuccessPage";
import ContactPage from "./pages/contactPage";
import { CartProvider } from "./functionality/cartContext.js"; 

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Layout> 
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products/:id" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/cart-success" element={<CartSuccessPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </Layout>
            </Router>
        </CartProvider>
    );
};

export default App;
