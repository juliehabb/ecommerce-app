import React from "react";
import { SuccessContainer, SuccessTitle, SuccessMessage, BackToHomeButton } from "../styling/general";
import { useNavigate } from "react-router-dom";

const CartSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <SuccessContainer>
      <SuccessTitle>Success!</SuccessTitle>
      <SuccessMessage>The purchase was a success! You will get a confirmation email shortly.</SuccessMessage>
      <BackToHomeButton onClick={() => navigate("/")}>Back to Home</BackToHomeButton>
    </SuccessContainer>
  );
};

export default CartSuccessPage;