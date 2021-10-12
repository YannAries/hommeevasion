import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30px;
  padding: 5px;
  background-color: #099;
  color: #fff;
  font-size: 20px;
  font-weight: 700px;
  ${mobile({ fontSize: "14px", textAlign: "center" })}
`;

const Announcement = () => {
  return (
    <Container>
      Superbe affaire ! Frais de port gratuit pour les commandes de plus de 90 $
    </Container>
  );
};

export default Announcement;
