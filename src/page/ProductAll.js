import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams("");
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      let keyword = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/yonghyun421/hnm-practice/products?q=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      if (data.length < 1) {
        if (keyword !== "") {
          setError(`${keyword}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다");
        }
      }
      setProductList(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div>
      <Container>
        {error ? (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        ) : (
          <Row>
            {productList.map((product) => {
              return (
                <Col lg={3} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll;
