import styled from "styled-components";
import { UserLogin } from "pages/login/login.model";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface UserCreationFormProps {
  onSubmit: (userLogin: UserLogin) => void;
}

const UserCreationForm = ({ onSubmit }: UserCreationFormProps) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const beforeSubmit = () => onSubmit({ username, password });

  return (
    <Form onSubmit={beforeSubmit}>
      <h1>Create a new account</h1>
      <label>
        <p>Email</p>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Continuer</button>
      </div>
    </Form>
  );
};

export default UserCreationForm;
