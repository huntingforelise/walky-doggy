import React, { useState } from 'react';
import auth from './../utils/auth';
import userService from './../Services/UserService';
import { useRouter } from 'next/router';

const initialState = {
  username: '',
  password: '',
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
    const res = await userService.login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const userInfo = await userService.getUserInfo();
      const userId = userInfo._id;
      props.setIsAuthenticated(true);
      localStorage.setItem('userId', userId);
      auth.login(() => router.push(`/account`));
    }
  };

  const validateForm = () => {
    return !state.username || !state.password;
  };

  return (
    <section>
      <div className='form-control' style={{textAlign: "center"}}>
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
        <button className="btn-clicked" type="submit" disabled={validateForm()}>
          Login
        </button>
      </form>
      </div>
    </section>
  );
};

export default Login;
