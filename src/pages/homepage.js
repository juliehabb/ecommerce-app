import React from "react";
import { FaStar } from "react-icons/fa";
import { 
    HeroSection, HeroOverlay, HeroContent, HeroButton, 
    ProductCard, ProductTitle, ProductRating, ProductPrice, AddToCartButton, ProductContainer
} from "../components/header/header.styles";
import { useFetchProducts } from "../functionality/fetch/fetch";

const HomePage = () => {
  const { products, loading, error } = useFetchProducts(); 

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <HeroSection style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <HeroOverlay />
        <HeroContent>
          <h1>Survival & Tactical Gear</h1>
          <p>Gear Up. Stay Ready. Conquer Anything.</p>
          <HeroButton>Buy Now</HeroButton>
        </HeroContent>
      </HeroSection>
      
      {}
      <ProductContainer>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductRating>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? "filled" : "empty"} />
                ))}
                <span>{product.rating || "N/A"}</span>
              </ProductRating>
              <hr />
              <ProductPrice>${product.price}</ProductPrice>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </ProductCard>
          ))}
      </ProductContainer>
    </>
  );
};

export default HomePage;

