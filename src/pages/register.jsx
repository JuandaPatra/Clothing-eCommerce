import React from "react";
import { FormControl, Button } from "react-bootstrap";
import "../style/register.scss"

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="registerBox">
        <h1>Register</h1>
        <div className="boxForm">
        <label>Username</label>
        <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        <label>Email</label>
        <FormControl placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
        <label>Password</label>
        <FormControl placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
        <label>Retype Password</label>
        <FormControl placeholder="checkPassword" aria-label="password" aria-describedby="basic-addon1" />
        <Button variant="success">Register</Button>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
