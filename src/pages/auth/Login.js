import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

//import Button from "../../components/ui/button/Button";
//import Input from "../../components/ui/input/Input";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const history = useHistory();
  const { login } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(email, password);
      alert("Login feito com Sucesso");
      history.push("/");
    } catch {
      setError("Falha ao fazer o Login");
    }
  }

  return (
    <>
      <div className="header-login">
        <h1>MixAgro</h1>
      </div>
      {error && <span>{error}</span>}
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <label className="">email</label>
            <input
              placeholder=""
              required="required"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="bloco-input">
            <label className="">Password</label>
            <input
              placeholder="*********"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <button type="submit">Entrar</button>
        <div>
          <p>
            <Link style={{ textDecoration: "none" }} to="/login">
              Criar conta
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
