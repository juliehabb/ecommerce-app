import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../functionality/cartContext.js";
import { HeaderContainer, Nav, Logo, NavLinks, CartIcon } from "../header/header.styles.js";

const Header = () => {
  const { cart } = useContext(CartContext); 

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

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
          <Link to="/contact">Contact</Link>
        </NavLinks>
        <CartIcon>
          <Link to="/cart">Cart ({totalItems})</Link>
        </CartIcon>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;