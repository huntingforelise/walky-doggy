import React, { useState } from "react";
import auth from "../utils/auth";
import userService from "../Services/UserService";
import { useRouter } from "next/router";

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const router = useRouter();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
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
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={state.username}
            onChange={handleChange}
            autoComplete="off"
          />
          <label>Password</label>
          <input
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
