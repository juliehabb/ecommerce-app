import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { 
    ProductContainer, ProductImage, ProductDetails, ProductTitle, ProductDescription, 
    ProductPrice, AddToCartButton, BuyNowButton, AccordionContainer, Accordion, 
    ProductCardsSection, ProductCard, ProductRating
} from "../styling/general";

const products = [
  { id: 1, title: "Survival Knife", rating: 4.5, price: "$49.99" },
  { id: 2, title: "Tactical Backpack", rating: 4.8, price: "$89.99" },
  { id: 3, title: "Emergency Tent", rating: 4.3, price: "$39.99" },
  { id: 4, title: "First Aid Kit", rating: 4.7, price: "$29.99" },
];

const ProductPage = () => {
  return (
    <>
      {/* First Section: Product Overview */}
      <ProductContainer>
        <ProductImage src="https://via.placeholder.com/500" alt="Product" />
        <ProductDetails>
          <FaHeart className="like-icon" />
          <ProductTitle>Survival Knife</ProductTitle>
          <ProductDescription>High-quality stainless steel knife for survival and tactical use.</ProductDescription>
          <ProductPrice>$49.99</ProductPrice>
          <AddToCartButton>Add to Cart</AddToCartButton>
          <BuyNowButton>Buy Now</BuyNowButton>
        </ProductDetails>
      </ProductContainer>

      {/* Second Section: Product Details with Accordion */}
      <AccordionContainer>
        <Accordion>
          <h3>Product Information</h3>
          <p>Details about the product, materials, and usage.</p>
        </Accordion>
        <Accordion>
          <h3>Specifications</h3>
          <p>Technical details, size, and weight.</p>
        </Accordion>
        <Accordion>
          <h3>Reviews</h3>
          <p>Customer feedback and ratings.</p>
        </Accordion>
      </AccordionContainer>

      {/* Third Section: Related Products */}
      <ProductCardsSection>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductRating>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating) ? "filled" : "empty"} />
              ))}
              <span>{product.rating}</span>
            </ProductRating>
            <ProductPrice>{product.price}</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ProductCard>
        ))}
      </ProductCardsSection>
    </>
  );
};

export default ProductPage;
