import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as css from "./login-style.module.css";
import Button from "@material-ui/core/Button";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");

  /* Login  */
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  /* Register  */
  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className={css.bg}>
      <div className={css.login}>
        <form className={css.signin}>
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPaswword(e.target.value)}
            value={password}
            required
          />
          <Button type="submit" onClick={login}>
            Login
          </Button>
        </form>
        <div className={css.register}>
          <p>
            By clicking register, you agree to our User Agreement, Privacy
            Policy.!
          </p>
          <Button onClick={register}>register</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
