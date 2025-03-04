import styled from "styled-components";

export const HeaderContainer = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 70px; 
   padding: 10px 40px; 
   display: flex;
   justify-content: space-between;
   align-items: center;
   z-index: 1000;
`;

export const Logo = styled.div`
   img {
      height: 50px;
   }
`;

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   gap: 20px;
`;

export const NavLinks = styled.div`
   display: flex;
   gap: 20px;
   a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      transition: color 0.3s;
      &:hover {
         color: #f0a500;
      }
   }
`;

export const CartIcon = styled.div`
   color: white;
   cursor: pointer;
`;

export const SearchBar = styled.input`
   padding: 8px;
   border-radius: 4px;
   border: 1px solid #ccc;
   background-color: white;
   margin-right: 5rem;
`;

export const HeroSection = styled.header`
   height: 100vh;
   background-size: cover;
   background-position: center;
   position: relative;
   color: white;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const HeroOverlay = styled.div`
   position: absolute;
   inset: 0;
   background: rgba(0, 0, 0, 0.6);
`;

export const HeroContent = styled.div`
   position: relative;
   z-index: 1;
`;

export const HeroButton = styled.button`
   background-color: #e60023;
   color: white;
   padding: 10px 20px;
   border-radius: 8px;
   font-size: 18px;
   transition: background-color 0.3s;
   &:hover {
      background-color: #c2001d;
   }
`;

export const ProductContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   gap: 20px;
   padding: 40px 20px;
   justify-content: center;

   @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
   }

   @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
   }
`;

export const ProductCard = styled.div`
   background-color: white;
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   text-align: center;
   border: 1px solid #ddd;
`;

export const ProductTitle = styled.h3`
   font-size: 20px;
   font-weight: bold;
   margin-bottom: 10px;
`;

export const ProductRating = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 10px;
   .filled {
      color: #f0a500;
   }
   .empty {
      color: #ccc;
   }
`;

export const ProductPrice = styled.p`
   font-size: 28px;
   font-weight: bold;
   margin: 10px 0;
`;

export const AddToCartButton = styled.button`
   background-color: #007bff;
   color: white;
   padding: 10px 15px;
   border-radius: 8px;
   width: 100%;
   transition: background-color 0.3s;
   &:hover {
      background-color: #0056b3;
   }
`;

