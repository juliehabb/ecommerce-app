import React, { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFetchProductById } from "../functionality/fetch/fetchProductId.js"; 
import { CartContext } from "../functionality/cartContext.js";
import { 
    ProductContainer, ProductImage, ProductDetails, ProductTitle, ProductDescription, 
    ProductPrice, AddToCartButton, BuyNowButton, AccordionContainer, Accordion, 
    ProductCardsSection, ReviewContainer, ReviewCard, ReviewAuthor, ReviewComment
} from "../styling/general";

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProductById(id);
  const { addToCart } = useContext(CartContext);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
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
          {product.reviews?.length > 0 ? (
            <ReviewContainer>
              {product.reviews.map((review, index) => (
                <ReviewCard key={index}>
                  <ReviewAuthor>{review.username || "Anonymous"}</ReviewAuthor>
                  <div>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < review.rating ? "filled" : "empty"} />
                    ))}
                  </div>
                  <ReviewComment>{review.comment || "No comment provided."}</ReviewComment>
                </ReviewCard>
              ))}
            </ReviewContainer>
          ) : (
            <p>No reviews yet.</p>
          )}
        </Accordion>
      </AccordionContainer>
      <ProductCardsSection>
        <h3>Related Products</h3>
      </ProductCardsSection>
    </>
  );
};

export default ProductPage;
