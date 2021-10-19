import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://res.cloudinary.com/dyzchhb1s/image/upload/v1634030706/Hommeevasion/victoria-bilsborough-nLNimOqmbpg-unsplash.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.37vh;
  font-weight: 100;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 15px 20px;
  background-color: #099;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: #00ff00;
    cursor: not allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: f00;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleclick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CONNEXION / INSCRIPTION</Title>
        <Form>
          <Input
            placeholder="Pseudonyme"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleclick} disabled={isFetching}>
            SE CONNECTER
          </Button>
          {error && <Error>Erreur</Error>}
          {/* <error></error> */}
          <Link>MOT DE PASSE OUBLIÉ ?</Link>
          <Link>CRÉER UN NOUVEAU COMPTE</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
