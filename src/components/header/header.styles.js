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
   margin-top: 2rem;
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

