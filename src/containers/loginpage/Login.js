import React from "react";
import * as css from "./login-style.module.css";
import Button from "@material-ui/core/Button";

const Login = () => {
  return (
    <div className={css.bg}>
      <div className={css.login}>
        <div className={css.signin}>
          <input type="text" placeholder="E-mail" required />
          <input type="password" placeholder="Password" required />
          <Button>Login</Button>
        </div>
        <div className={css.register}>
          <p>
            By clicking register, you agree to our User Agreement, Privacy
            Policy.!
          </p>
          <Button>register</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
