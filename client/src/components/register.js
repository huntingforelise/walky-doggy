import React, { useState } from 'react';
import auth from './../utils/auth';
import userService from './../Services/UserService';
import { useRouter } from 'next/router';

const initialState = {
  username: '',
  email: '',
  password: '',
  isOwner: false,
  isWalker: false
};

const Register = (props) => {
  const router = useRouter();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isOwner, isWalker, username, email, password } = state;
    const user = { isOwner, isWalker, username, email, password };
    const res = await userService.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      auth.login(() => router.push('/account'));
    }
  };

  const validateForm = () => {
    return (
      (!state.isOwner || !state.isWalker) || !state.username || !state.email || !state.password
    );
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" name="owner" checked={state.isOwner} onChange={handleCheckChange} />
          Dog Owner
        </label>
        <label>
          <input type="checkbox" name="walker" checked={state.isWalker} onChange={handleCheckChange} />
          Dog Walker
        </label>
        <input
          type="text"
          placeholder="username"
          name="name"
          value={state.username}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="name@mail.com"
          name="email"
          value={state.email}
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
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
