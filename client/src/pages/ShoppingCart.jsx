import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#000" : "rgba(0,0,0,0.1);"};
  color: ${(props) => props.type === "filled" && "#fff"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 100;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #808080;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
`;

const ShoppingCart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>VOTRE PANIER</Title>
        <Top>
          <TopButton>POURSUIVEZ VOS ACHATS</TopButton>
          <TopTexts>
            <TopText>Panier (0)</TopText>
            <TopText>Votre liste de voeux (0)</TopText>
          </TopTexts>
          <TopButton type="filled">PROCÉDER AU PAIEMENT</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://res.cloudinary.com/dyzchhb1s/image/upload/c_scale,w_640/v1634055386/Hommeevasion/underwear_1.jpg" />
                <Details>
                  <ProductName>
                    <b>Article :</b> SLIP MARINE FONCÉ EN COTON BIO
                  </ProductName>
                  <ProductId>
                    <b>Identifiant :</b> 33545
                  </ProductId>
                  <ProductColor color="#0000ff" />
                  <ProductSize>
                    <b>Taille :</b> 42
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>40 CA$</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://res.cloudinary.com/dyzchhb1s/image/upload/c_scale,w_645/v1634055379/Hommeevasion/underwear.jpg" />
                <Details>
                  <ProductName>
                    <b>Article :</b> SLIP BLANC SMOKE EN COTON BIO
                  </ProductName>
                  <ProductId>
                    <b>Identifiant :</b> 33545
                  </ProductId>
                  <ProductColor color="#efefc8" />
                  <ProductSize>
                    <b>Taille :</b> 42
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>40 CA$</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>RÉCAPITULATIF DE LA COMMANDE</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sous-total</SummaryItemText>
              <SummaryItemPrice>50 CA$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frais de livraison (estimation)</SummaryItemText>
              <SummaryItemPrice>3.90 CA$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Promo livraison</SummaryItemText>
              <SummaryItemPrice>-3.90 CA$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>50 CA$</SummaryItemPrice>
            </SummaryItem>
            <Button>PROCÉDER AU PAIEMENT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ShoppingCart;
