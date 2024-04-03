import React, { useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAll } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams("");
  const dispatch = useDispatch();

  const getProducts = async () => {
    let keyword = query.get("q") || "";
    // dispatch(productAction.getProducts(keyword));
    dispatch(fetchProductsAll(keyword));
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList?.map((product) => {
            return (
              <Col md={3} sm={12} key={product.id}>
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
