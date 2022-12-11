import { useState } from "react";

const useToken = () => {
  const [token, setToken] = useState();

  const saveToken = (newToken: any) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  return { token, setToken: saveToken };
};

export default useToken;
