import React from "react";
import { FaStar } from "react-icons/fa";
import { 
    HeroSection, HeroOverlay, HeroContent, HeroButton, 
    ProductCard, ProductTitle, ProductRating, ProductPrice, AddToCartButton
} from "../components/header/header.styles";

const products = [
  { id: 1, title: "Survival Knife", rating: 4.5, price: "$49.99" },
  { id: 2, title: "Tactical Backpack", rating: 4.8, price: "$89.99" },
  { id: 3, title: "Emergency Tent", rating: 4.3, price: "$39.99" },
  { id: 4, title: "First Aid Kit", rating: 4.7, price: "$29.99" },
];

const HomePage = () => {
  return (
    <>
      <HeroSection style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <HeroOverlay />
        <HeroContent>
          <h1 className="text-5xl font-bold mb-4">Survival & Tactical Gear</h1>
          <p className="text-xl mb-6">Gear Up. Stay Ready. Conquer Anything.</p>
          <HeroButton>Buy Now</HeroButton>
        </HeroContent>
      </HeroSection>
      
      {/* Product Cards Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductRating>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="ml-2 text-gray-600">{product.rating}</span>
              </ProductRating>
              <hr className="my-4" />
              <ProductPrice>{product.price}</ProductPrice>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </ProductCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
