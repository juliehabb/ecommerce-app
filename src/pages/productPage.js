import React, { useContext} from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFetchProductById } from "../functionality/fetch/fetchProductId.js"; 
import { CartContext } from "../functionality/cartContext.js";
import { 
    ProductContainer, ProductImage, ProductDetails, ProductTitle, ProductDescription, 
    ProductPrice, AddToCartButton, BuyNowButton, AccordionContainer, Accordion, 
    ProductCardsSection
} from "../styling/general";



const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const { product, loading, error } = useFetchProductById(id); // Fetch single product
  const { addToCart } = useContext(CartContext); // Get add to cart function

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
      {/* First Section: Product Overview */}
      <ProductContainer>
        <ProductImage 
          src={product.image?.url || "https://via.placeholder.com/500"} 
          alt={product.image?.alt || product.title} 
        />
        <ProductDetails>
          <FaHeart className="like-icon" />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>${product.discountedPrice ?? product.price}</ProductPrice>
          <AddToCartButton onClick={() => addToCart(product)}> 
            Add to Cart
          </AddToCartButton>
          <BuyNowButton>Buy Now</BuyNowButton>
        </ProductDetails>
      </ProductContainer>

      {/* Second Section: Product Details with Accordion */}
      <AccordionContainer>
        <Accordion>
          <h3>Product Information</h3>
          <p>{product.description}</p>
        </Accordion>
        <Accordion>
          <h3>Specifications</h3>
          <p>Tags: {product.tags?.join(", ") || "N/A"}</p>
        </Accordion>
        <Accordion>
          <h3>Reviews</h3>
          <p>{product.reviews?.length > 0 ? `Total reviews: ${product.reviews.length}` : "No reviews yet."}</p>
        </Accordion>
      </AccordionContainer>

      {/* Third Section: Related Products */}
      <ProductCardsSection>
        <h3>Related Products</h3>
        {/* Add related product logic here */}
      </ProductCardsSection>
    </>
  );
};

export default ProductPage;
