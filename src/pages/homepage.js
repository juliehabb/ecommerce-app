import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { 
    HeroSection, HeroOverlay, HeroContent, HeroButton, SearchBar 
} from "../components/header/header.styles";
import { 
  ProductCardsGrid, SingleProductCard, CardTitle, CardRating, CardPrice, CardButton, CardImage
} from "../styling/general.js";

import { useFetchProducts } from "../functionality/fetch/fetch";

const HomePage = () => {
  const { products, loading, error } = useFetchProducts();
  const [searchQuery, setSearchQuery] = useState(""); 

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredProducts = products
    .slice(0, 10) 
    .filter((product) => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

      <SearchBar 
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ProductCardsGrid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit" }}>
              <SingleProductCard>
                <CardImage 
                  src={product.image?.url || "https://via.placeholder.com/200"} 
                  alt={product.image?.alt || product.title} 
                  loading="lazy" 
                />
                <CardTitle>{product.title}</CardTitle>
                <CardRating>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "filled" : "empty"} />
                  ))}
                  <span>{product.rating || "N/A"}</span>
                </CardRating>
                <CardPrice>${product.discountedPrice ?? product.price}</CardPrice>
                <CardButton>Add to Cart</CardButton>
              </SingleProductCard>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ProductCardsGrid>
    </>
  );
};

export default HomePage;
