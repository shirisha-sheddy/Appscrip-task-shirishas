import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        let products = await res.json();

        products = products.map((product, index) => {
          if (index === 0) {
            product.new_product = "NEW PRODUCT";
          } else if (index === 1) {
            product.out_of_stock = "OUT OF STOCK";
          }
          return product;
        });

        const formattedProducts = products.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          status: "or Create an account to see pricing",
          stock: product.out_of_stock,
          newProduct: product.new_product,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home-container">
      <header>
        <title>Discover Our Products</title>
        <meta name="description" content="Explore our wide range of products" />
      </header>
      <Header />
      <div className="home-main">
        <ProductList products={products} />
      </div>
      <Footer />
    </div>
  );
}
