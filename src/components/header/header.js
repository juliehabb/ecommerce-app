import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Nav, Logo, NavLinks, CartIcon, SearchBar } from "../header/header.styles.js";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="https://via.placeholder.com/100x50" alt="Logo" />
      </Logo>
      <Nav>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </NavLinks>
        <CartIcon>
          <span>Cart (0)</span>
        </CartIcon>
      </Nav>
      <SearchBar placeholder="Search products..." />
    </HeaderContainer>
  );
};

export default Header;