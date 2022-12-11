import { Title } from "components/baseComponents";
import { UserLogin } from "pages/login/login.model";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

interface LoginFormProps {
  onSubmit: (userLogin: UserLogin) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const beforeSubmit = () => onSubmit({ username, password });

  return (
    <Form onSubmit={beforeSubmit}>
      <Title>Please Log In</Title>
      <label>
        <p>Email</p>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};

export default LoginForm;
