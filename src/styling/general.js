import styled from "styled-components";


export const ProductContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 40px;
   max-width: 1200px;
   margin: 0 auto;
   gap: 40px;
`;

export const ProductImage = styled.img`
   width: 50%;
   height: auto;
   border-radius: 10px;
`;

export const ProductDetails = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 15px;
`;

export const ProductTitle = styled.h1`
   font-size: 24px;
   font-weight: bold;
`;

export const ProductDescription = styled.p`
   font-size: 16px;
   color: #555;
`;

export const ProductPrice = styled.p`
   font-size: 22px;
   font-weight: bold;
   color: #e60023;
`;

export const AddToCartButton = styled.button`
   background-color: #007bff;
   color: white;
   padding: 10px 15px;
   border-radius: 8px;
   border: none;
   cursor: pointer;
   font-size: 16px;
   &:hover {
      background-color: #0056b3;
   }
`;

export const BuyNowButton = styled(AddToCartButton)`
   background-color: #28a745;
   &:hover {
      background-color: #218838;
   }
`;

export const AccordionContainer = styled.div`
   max-width: 800px;
   margin: 40px auto;
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

export const Accordion = styled.div`
   background-color: #f9f9f9;
   padding: 15px;
   border-radius: 5px;
   border: 1px solid #ddd;
   cursor: pointer;
   &:hover {
      background-color: #f1f1f1;
   }
   h3 {
      margin: 0 0 5px;
   }
   p {
      margin: 0;
      font-size: 14px;
      color: #666;
   }
`;

export const ProductCardsSection = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 20px;
   padding: 40px 20px;
`;

export const ProductCard = styled.div`
   background-color: white;
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   text-align: center;
   border: 1px solid #ddd;
   width: 200px;
`;

export const ProductRating = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 5px;
   .filled {
      color: #f0a500;
   }
   .empty {
      color: #ccc;
   }
`;

/* Checkout */

export const CartContainer = styled.div`
   max-width: 800px;
   margin: 40px auto;
   padding: 20px;
   background-color: #fff;
   border-radius: 8px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   text-align: center;
`;

export const CartItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px;
   border-bottom: 1px solid #ddd;
`;

export const CartItemDetails = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 5px;
`;

export const CartItemTitle = styled.h3`
   font-size: 18px;
   font-weight: bold;
`;

export const CartItemPrice = styled.p`
   font-size: 16px;
   color: #e60023;
`;

export const QuantityContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      font-size: 16px;
      border-radius: 4px;
      &:hover {
         background-color: #0056b3;
      }
   }
   span {
      font-size: 16px;
      font-weight: bold;
   }
`;

export const RemoveButton = styled.button`
   background-color: #dc3545;
   color: white;
   border: none;
   padding: 5px 10px;
   cursor: pointer;
   font-size: 16px;
   border-radius: 4px;
   &:hover {
      background-color: #c82333;
   }
`;

export const CartSummary = styled.div`
   margin-top: 20px;
   padding: 15px;
   background-color: #f8f9fa;
   border-radius: 8px;
`;

export const CheckoutButton = styled.button`
   background-color: #28a745;
   color: white;
   border: none;
   padding: 10px 20px;
   font-size: 18px;
   font-weight: bold;
   cursor: pointer;
   border-radius: 5px;
   margin-top: 10px;
   &:hover {
      background-color: #218838;
   }
`;


/* Cart success */
export const SuccessContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   text-align: center;
   background-color: #f8f9fa;
`;

export const SuccessTitle = styled.h1`
   font-size: 36px;
   font-weight: bold;
   color: #28a745;
   margin-bottom: 20px;
`;

export const SuccessMessage = styled.p`
   font-size: 18px;
   color: #333;
   margin-bottom: 30px;
`;

export const BackToHomeButton = styled.button`
   background-color: #007bff;
   color: white;
   border: none;
   padding: 10px 20px;
   font-size: 18px;
   font-weight: bold;
   cursor: pointer;
   border-radius: 5px;
   &:hover {
      background-color: #0056b3;
   }
`;


/* Contact */


export const ContactContainer = styled.div`
   max-width: 600px;
   margin: 50px auto;
   padding: 20px;
   background-color: #fff;
   border-radius: 8px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   text-align: center;
`;

export const ContactForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 15px;
`;

export const FormGroup = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
`;

export const Label = styled.label`
   font-size: 16px;
   font-weight: bold;
   margin-bottom: 5px;
`;

export const Input = styled.input`
   padding: 10px;
   border-radius: 5px;
   border: 1px solid #ccc;
   font-size: 16px;
   &:focus {
      border-color: #007bff;
      outline: none;
   }
`;

export const TextArea = styled.textarea`
   padding: 10px;
   border-radius: 5px;
   border: 1px solid #ccc;
   font-size: 16px;
   height: 100px;
   resize: none;
   &:focus {
      border-color: #007bff;
      outline: none;
   }
`;

export const SubmitButton = styled.button`
   background-color: #007bff;
   color: white;
   border: none;
   padding: 10px 15px;
   font-size: 18px;
   font-weight: bold;
   cursor: pointer;
   border-radius: 5px;
   margin-top: 10px;
   &:hover {
      background-color: #0056b3;
   }
`;

export const ErrorMessage = styled.p`
   color: #dc3545;
   font-size: 14px;
   margin-top: 5px;
`;