import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://res.cloudinary.com/dyzchhb1s/image/upload/v1634067904/Hommeevasion/vincent-branciforti-mGh2rjPgUyA-unsplash.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 100;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #099;
  color: #fff;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRÉER UN COMPTE</Title>
        <Form>
          <Input placeholder="Prénom" />
          <Input placeholder="Nom" />
          <Input placeholder="Pseudonyme" />
          <Input placeholder="Courriel" />
          <Input placeholder="Mot de passe" />
          <Input placeholder="Confirmer votre mot de passe" />
          <Agreement>
            Je consens à la collecte et au traitement de mes données
            personnelles tel que défini dans la{" "}
            <b>
              <u>POLITIQUE DE PROTECTION DE DONNÉES PERSONNELLES</u>
            </b>{" "}
            afin de bénéficier des services du site internet Homme Évasion.
          </Agreement>
          <Button>CRÉER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
