import useToken from "hooks/useToken";
import LoginForm from "pages/login/LoginForm";
import { UserLogin } from "pages/login/login.model";
import { Divider } from "components/baseComponents";
import UserCreationForm from "pages/login/UserCreationForm";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
`;

async function loginUser(credentials: { username: string; password: string }) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const LoginPage = () => {
  const { setToken } = useToken();

  const handleLogin = async (userLogin: UserLogin) => {
    const token = await loginUser(userLogin);
    setToken(token);
  };

  const handleUserCreation = async (userLogin: UserLogin) => {
    const token = await loginUser(userLogin);
    setToken(token);
  };

  return (
    <Container>
      <LoginForm onSubmit={handleLogin} />
      <Divider />
      <UserCreationForm onSubmit={handleUserCreation} />
    </Container>
  );
};

export default LoginPage;
