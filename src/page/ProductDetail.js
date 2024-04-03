import React, { useEffect } from "react";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../redux/reducers/productSlice";

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetail);
  const getProductDetail = async () => {
    // dispatch(productAction.getProductDetail(id));
    dispatch(fetchProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-image">
          <img src={product?.img} alt="product" width={250} />
        </Col>
        <Col>
          <h3>{product?.title}</h3>
          <h4>₩ {product?.price}</h4>
          <div>{product?.choice ? "Choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-grid gap-2" id="add-cart-button">
            <Button variant="secondary" size="lg">
              장바구니 담기
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
