import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import ProductScreenTemplate from "../../components/templates/ProductscreenTemplate/ProductScreenTemplate";
import ProductCard from "../../components/molecules/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { productActions } from "../../redux/actions";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import SearchFilter from "../ProductSearch/SearchFilter";

interface Props {}

const CardsDemo = ({  }: Props) => {
  const qs = require("qs");
  const dispatch = useDispatch();
  const location = useLocation();
  const loading = useSelector((state: any) => state.products.loading);
  const products = useSelector((state: any) => state.products.all);
  const { category, brands, gender }: any = useParams();

  console.log(`location`, location);
  useEffect(() => {}, [location]);

  const arr = qs.parse("?&gender=Male&gender=Female");
  console.log(`arr`, arr);
  const update = () => {
    window.history.pushState({}, "", "/search?hello[]=1&hello[]=2");
  };

  useEffect(() => {
    dispatch(productActions.getTrendingProducts("MEN"));
  }, []);

  console.log(`loading`, loading);

  return (
    <ProductScreenTemplate>
      {loading && <h1>Chargement...</h1>}

      {!loading && (
        <Container>
          {/* <button onClick={update}>URL</button> */}
          <Row>
            <Col sm={2}>
              <Row>
                {/* <SearchFilter heading={'Gender'} options={['Homme', 'Femme']} /> */}
              </Row>
              <Row>
                <br />
              </Row>
              <Row>
                {/* <Filter heading={'Brand'} options={['Puma', 'Adidas', 'Roadster']} /> */}
              </Row>
            </Col>

            <Col>
              <Row>
                {products.map((product: any) => (
                  <Col sm={3} key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </ProductScreenTemplate>
  );
};

export default CardsDemo;
