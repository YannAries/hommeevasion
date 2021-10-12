import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8", textAlign: "flex" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HOMME ÉVASION</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          suscipit aliquid odio fuga consequuntur consequatur molestias
          reprehenderit voluptates laudantium, accusantium esse cumque
          cupiditate soluta voluptatum, quis veritatis? Asperiores, sint ad!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liens utiles</Title>
        <List>
          <ListItem>Accueil</ListItem>
          <ListItem>Qui sommes-nous ?</ListItem>
          <ListItem>Démarche éco-responsable</ListItem>
          <ListItem>Mon Compte</ListItem>
          <ListItem>Panier</ListItem>
          <ListItem>Suivi de commande</ListItem>
          <ListItem>Liste de souhaits</ListItem>
          <ListItem>Termes et conditions d&#39;utilisation</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          3999, rue Wellington, Verdun QC H4G 1V6
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 514-514-5144
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@hommeevasion.qc.ca
        </ContactItem>
        <Payment src="https://res.cloudinary.com/dyzchhb1s/image/upload/v1634061757/Hommeevasion/5e301c279d703b5a12c503c4_poweredstripe.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
