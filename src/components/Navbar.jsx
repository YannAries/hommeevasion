import { Badge } from "@material-ui/core";
import { Search, ShoppingCartTwoTone } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid #808080;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ fontSize: "24px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: 700;
  ${mobile({ width: "50px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>FR</Language>
          <SearchContainer>
            <Input placeholder="Recherche..." />
            <Search style={{ color: "#808080", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HOMME ÉVASION</Logo>
        </Center>
        <Right>
          <MenuItem>S&#39;INSCRIRE</MenuItem>
          <MenuItem>S&#39;ENREGISTRER</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartTwoTone />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
