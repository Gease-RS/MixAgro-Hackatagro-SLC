import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button/Button";

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
      alert("Seja bem-vindo ao MixAgro");
      history.push("/list-ordens-servico");
    } catch {
      setError("Falha ao fazer o Login");
    }
  }

  return (
    <>
      <div className="container">
        <div className="header-login"></div>
        {error && <span>{error}</span>}

        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="bloco-input">
              <label className="">
                Email <span className="acess">admin@admin.com</span>
              </label>
              <input
                placeholder="admin@admin.com"
                required="required"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="bloco-input">
              <label className="">
                Password <span className="acess">123456</span>
              </label>
              <input
                placeholder="123456"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="footer">
            <Button type="submit">Entrar</Button>
            <div>
              <p>
                <Link className="account" to="/account-create">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
