import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(240, 10, 10, 0.1);
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
       flex-direction: column;
       padding: 10px;
    }
`;

export const Logo = styled.div`
   display: flex;
`;


export const Nav = styled.nav`
   display: flex;
   align-items: center;
`;

export const NavLinks = styled.div`
   margin-right: 20px;
   display: flex;
   gap: 20px;
   a {
       text-decoration: none;
       color: #333;   
   }
`;

export const CartIcon = styled.div`
   position: relative;
   cursor: pointer;
`;

export const SearchBar = styled.input`
   padding: 8px;
   margin-right: 20px;
   border-radius: 4px;
   border: 1px solid #ccc;

`;


