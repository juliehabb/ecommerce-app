import { useState, useEffect } from "react";

export const useFetchProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        console.log("Fetching product with ID:", id); // Debugging: Log the ID to console
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const result = await response.json();
        console.log("Fetched Product Data:", result); // Log API response
        
        if (result && result.data) {
          setProduct(result.data); 
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

