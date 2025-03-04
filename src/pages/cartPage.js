import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { 
    CartContainer, CartItem, CartItemDetails, CartItemTitle, CartItemPrice, 
    RemoveButton, QuantityContainer, CheckoutButton, CartSummary
} from "../styling/general";

const initialCart = [
  { id: 1, title: "Survival Knife", price: 49.99, quantity: 1 },
  { id: 2, title: "Tactical Backpack", price: 89.99, quantity: 1 },
  { id: 3, title: "Emergency Tent", price: 39.99, quantity: 1 },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate(); // Initialize navigation function

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

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
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </QuantityContainer>
              <RemoveButton onClick={() => removeItem(item.id)}>Remove</RemoveButton>
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

