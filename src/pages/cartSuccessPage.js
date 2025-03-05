import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../functionality/cartContext"; 
import { SuccessContainer, SuccessMessage, BackToHomeButton } from "../styling/general";

const CartSuccessPage = () => {
  const { setCart } = useContext(CartContext); 
  const navigate = useNavigate();

  useEffect(() => {
    setCart([]); 
    localStorage.setItem("cart", JSON.stringify([])); 
  }, [setCart]);

  return (
    <SuccessContainer>
      <SuccessMessage>
        <h1>Success!</h1>
        <p>The purchase was a success! You will receive a confirmation email shortly.</p>
        <BackToHomeButton onClick={() => navigate("/")}>Back to Home</BackToHomeButton>
      </SuccessMessage>
    </SuccessContainer>
  );
};

export default CartSuccessPage;