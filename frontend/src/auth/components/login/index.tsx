import React, { FormEvent } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { login } = useLogin();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const [username, password] = Array.from(formData.values()) as [
      string,
      string
    ];

    await login({ username, password });
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
