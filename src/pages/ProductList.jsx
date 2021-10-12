import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Boxers&#47;Cale&ccedil;ons</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer les produits :</FilterText>
          <Select>
            <Option disabled selected>
              Couleur
            </Option>
            <Option>Blanc</Option>
            <Option>Noir</Option>
            <Option>Rouge</Option>
            <Option>Bleu</Option>
            <Option>Jaune</Option>
            <Option>Vert</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Taille
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Classer les produits :</FilterText>
          <Select>
            <Option selected>Plus récent</Option>
            <Option>Prix (asc)</Option>
            <Option>Prix (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
