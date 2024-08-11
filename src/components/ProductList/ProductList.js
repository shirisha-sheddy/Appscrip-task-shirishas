import React, { useState, useEffect } from "react";
import './ProductList.css';
import Sidebar from "../FilterSidebar/Sidebar";

const ProductList = ({ products }) => {
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsFilterVisible(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLike = (id) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="product-list">
      <h1 className="product-title">DISCOVER OUR PRODUCTS</h1>
      <p className="product-description">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      <div className="product-list-header">
        {!isMobile ? (
          <>
            <div className="filter-toggle-container">
              <span className="item-count">{`${products.length} ITEMS`}</span>
              <button className="toggle-filter-button" onClick={toggleFilter}>
                {isFilterVisible ? "< HIDE FILTER" : "< SHOW FILTER"}
              </button>
            </div>
            <select className="recommended-select">
              <option>RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PRICE: LOW TO HIGH</option>
            </select>
          </>
        ) : (
          <div className="mobile-tab-container">
            <button className="filter-tab" onClick={toggleFilter}>
              FILTER
            </button>
            <select className="recommended-select">
              <option>RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PRICE: LOW TO HIGH</option>
            </select>
          </div>
        )}
      </div>

      <div className="content-wrapper">
        {!isMobile && isFilterVisible && <Sidebar />}
        <div className="product-section">
          {isMobile && isFilterVisible && <Sidebar />}
          <div
            className={`product-grid ${
              isFilterVisible && !isMobile
                ? "grid-filter-visible"
                : "grid-filter-hidden"
            }`}
          >
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <div
                  className={`product-card ${
                    product.stock === "OUT OF STOCK" ? "out-of-stock" : ""
                  }`}
                >
                  {product.newProduct && (
                    <div className="new-product">{product.newProduct}</div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={
                      product.stock === "OUT OF STOCK"
                        ? "blurred-image"
                        : ""
                    }
                  />
                  {product.stock === "OUT OF STOCK" && (
                    <div className="stock-status">{product.stock}</div>
                  )}
                </div>
                <div className="product-status-container">
                  <h5 className="product-name">{`${product.name.slice(
                    0,
                    20
                  )}...`}</h5>
                  <div className="like-container">
                    <p className="product-status">
                      <a className="sign-in" href="/">
                        Sign in{" "}
                      </a>
                      {`${product.status}`}
                    </p>
                    <button
                      className={`like-button ${
                        likedProducts.has(product.id) ? "liked" : ""
                      }`}
                      onClick={() => toggleLike(product.id)}
                    >
                      <svg
                        className="heart-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
