import React, { useState } from "react";
import { CustomInput } from "../commmon-widgets";
import { connect } from "react-redux";
import { addUser } from "../actions";

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newUser = {
      id: new Date().getTime(),
      name: user.username,
    };
    props.addUser(newUser);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h4>Login</h4>

        <CustomInput
          label="Username"
          value={user.username}
          onChange={handleChange}
          name="username"
          type="text"
        />

        <CustomInput
          label="Password"
          value={user.password}
          onChange={handleChange}
          name="password"
          type="password"
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  };
};

const mapDispatchToProps = {
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
