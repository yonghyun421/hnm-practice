import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const getProducts = async () => {
    let keyword = query.get("q") || "";
    dispatch(productAction.getProducts(keyword));
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
            {productList?.map((product) => {
              return (
                <Col md={3} sm={12} key={product.id}>
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
