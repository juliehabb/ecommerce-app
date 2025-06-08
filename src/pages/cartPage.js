import React, { useContext } from "react";
import { CartContext } from "../functionality/cartContext.js";
import { 
    CartContainer, CartItem, CartItemDetails, CartItemTitle, CartItemPrice, 
    RemoveButton, QuantityContainer, CheckoutButton, CartSummary
} from "../styling/general";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext); 
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItem key={item.id}>
            <CartItemDetails>
              <CartItemTitle>{item.title}</CartItemTitle>
              <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
              <QuantityContainer>
                <span>Quantity: {item.quantity}</span>
              </QuantityContainer>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remove
              </RemoveButton>
            </CartItemDetails>
          </CartItem>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <CartSummary>
          <h2>Total: ${getTotal()}</h2>
          <CheckoutButton onClick={() => navigate("/cart-success")}>
            Proceed to Checkout
          </CheckoutButton>
        </CartSummary>
      )}
    </CartContainer>
  );
};

export default CartPage;

