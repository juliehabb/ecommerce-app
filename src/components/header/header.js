import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Nav, Logo, NavLinks, CartIcon, SearchBar } from "../header/header.styles.js";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">  {}
        <Logo>
          <img src="/logo.png" alt="Logo" />
        </Logo>
      </Link>
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