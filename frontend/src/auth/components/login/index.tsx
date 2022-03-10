import React, { FormEvent } from "react";
import { AuthToken } from "../../hooks/useAuthToken/types";
import useLogin from "../../hooks/useLogin";

interface LoginProps {
  setAuthToken: (authToken: AuthToken) => void;
}
const Login = ({ setAuthToken }: LoginProps) => {
  const { login } = useLogin();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const [username, password] = Array.from(formData.values()) as [
      string,
      string
    ];

    const authToken = await login({ username, password });
    setAuthToken(authToken);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default Login;
