import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((product) => {
            return (
              <Col lg={3} key={product.id}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
