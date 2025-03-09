import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/productPage";
import CartPage from "./pages/cartPage";
import CartSuccessPage from "./pages/cartSuccessPage";
import ContactPage from "./pages/contactPage";
import { CartProvider } from "./functionality/cartContext.js"; 
import { PageContainer, ContentWrapper } from "./styling/layout.js"; 

const App = () => {
    return (
        <CartProvider>
            <Router>
                <PageContainer>
                    <Header />
                    <ContentWrapper>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products/:id" element={<ProductPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/cart-success" element={<CartSuccessPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </ContentWrapper>
                    <Footer />
                </PageContainer>
            </Router>
        </CartProvider>
    );
};

export default App;
