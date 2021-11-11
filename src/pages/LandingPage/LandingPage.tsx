import { useEffect } from "react";
import ProductScreenTemplate from "components/templates/ProductscreenTemplate/ProductScreenTemplate";
import { Carousel, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productActions } from "redux/actions";
import styles from "./LandingPage.module.css";

import BannerMen from "assets/banners/men.jpg";
import BannerWomen from "assets/banners/women.jpg";
import BannerMenWomen from "assets/banners/men-women.jpg";
import ProductHighlight from "./ProductHighlight";

const LandingPage = () => {
  const dispatch = useDispatch();
  const trendingMen = useSelector((state: any) => state.products.trendingMen);
  const trendingWomen = useSelector(
    (state: any) => state.products.trendingWomen
  );
  const topOffers = useSelector((state: any) => state.products.topOffers);

  const carouselItems = [
    { img: BannerMen, filterStr: "category=Men" },
    { img: BannerWomen, filterStr: "category=Women" },
    { img: BannerMenWomen, filterStr: "category=Men&category=Women" },
  ];

  useEffect(() => {
    if (!trendingMen.length)
      dispatch(productActions.getTrendingProducts("Men"));
    if (!trendingWomen.length)
      dispatch(productActions.getTrendingProducts("Women"));
    if (!topOffers.length) dispatch(productActions.getTopOfferProducts());
  }, []);

  return (
    <ProductScreenTemplate>
      <Container fluid>
        <Carousel fade>
          {carouselItems.map((item: any, idx: number) => (
            <Carousel.Item className={styles.carouselItem} key={idx}>
              <Link to={`/search?${item.filterStr}`} style={{ margin: "0" }}>
                <img className="d-block w-100" src={item.img} alt="" />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>

        <ProductHighlight heading="Tendance Homme" products={trendingMen} />
        <ProductHighlight heading="Tendance Femme" products={trendingWomen} />
        <ProductHighlight heading="Offres exclusives" products={topOffers} />
      </Container>
    </ProductScreenTemplate>
  );
};

export default LandingPage;
