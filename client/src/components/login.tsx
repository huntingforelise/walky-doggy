import React, { useState } from "react";
import * as userService from "../services/UserService";
import { useRouter } from "next/router";

type State = { username: string; password: string };
const initialState: State = {
  username: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const [state, setState] = useState(initialState);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { username, password } = state;
    const user = { username, password };
    const output = await userService.login(user);

    if (output.error) {
      alert(`${output.message}`);
      setState(initialState);
    } else {
      const userInfo = await userService.getUserInfo(output.res.username);
      const userId = userInfo.res._id;
      const isOwner = userInfo.res.isOwner;
      const isWalker = userInfo.res.isWalker;
      localStorage.setItem("userId", userId);
      localStorage.setItem("isOwner", isOwner);
      localStorage.setItem("isWalker", isWalker);
      if (isOwner) {
        router.push("/owneraccount");
      } else router.push("/walkeraccount");
    }
  };

  const validateForm = () => {
    return !state.username || !state.password;
  };

  return (
    <section>
      <div className="form-control" style={{ textAlign: "center" }}>
        <form className="add-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            name="username"
            value={state.username}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="******"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <p></p>
          <button
            className="btn-clicked"
            type="submit"
            disabled={validateForm()}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
