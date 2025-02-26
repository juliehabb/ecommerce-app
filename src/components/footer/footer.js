import React from "react";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} SurvivalStore. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
