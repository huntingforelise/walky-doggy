import React, { useState } from 'react';
import auth from './../utils/auth';
import userService from './../Services/UserService';
import { useNavigate } from 'react-router-dom';

const initialState = {
  username: '',
  password: '',
};

const Login = (props) => {

  let navigate = useNavigate();
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
    const res = await userService.login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const userInfo = await userService.getUserInfo();
      const userId = userInfo._id;
      props.setIsAuthenticated(true);
      localStorage.setItem('userId', userId);
      auth.login(() => navigate(`/events`)); // do we need a home/landing/profile page?
    }
  };

  const validateForm = () => {
    return !state.username || !state.password;
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={state.username}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="******"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button variant="outlined" className="form-submit" type="submit" disabled={validateForm()}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
