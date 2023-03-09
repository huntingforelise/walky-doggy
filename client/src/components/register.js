import React, { useState } from 'react';
import auth from './../utils/auth';
import userService from './../Services/UserService';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  type: ''
};

const Register = (props) => {
  const navigate = useNavigate();
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
    const { type, name, email, password } = state;
    const user = { type, name, email, password };
    const res = await userService.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      auth.login(() => navigate('/events')); // do we need a home/landing/profile page?
    }
  };

  const validateForm = () => {
    return (
      !state.type || !state.name || !state.email || !state.password
    );
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <select name="userType" value={state.type} onChange={handleChange}>
          <option value="">Select user type</option>
          <option value="owner">Dog Owner</option>
          <option value="walker">Dog Walker</option>
        </select>
        <input
          type="text"
          placeholder="username"
          name="name"
          value={state.name}
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
