import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [error, setError] = useState("");
  const history = useHistory();
  const { signUp } = useContext(AuthContext);

  const fakeNome = (e) => {
    e.preventDefault();
    console.log(name);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("As senhas não são iguais");
    }
    try {
      setError("");
      await signUp(email, password);
      alert("Sua conta foi criada com Sucesso");
      history.push("/login");
    } catch {
      setError("Falha ao criar a conta");
    }
  }

  return (
    <>
      <div className="container">
        <div className="header-signup">
          <h2>Criação de Conta</h2>
          {error && <span>{error}</span>}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="bloco-input">
              <label className="">Nome</label>
              <input
                placeholder=""
                required="required"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="bloco-input">
              <label className="">Email</label>
              <input
                placeholder=""
                required="required"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="bloco-input">
              <label className="">Senha</label>
              <input
                placeholder="*********"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="bloco-input">
              <label className="">Confirmar Senha</label>
              <input
                placeholder="*********"
                type="password"
                value={passwordConfirm}
                onChange={(event) => setPasswordConfirm(event.target.value)}
              />
            </div>
          </div>

          <button type="submit">Criar Conta</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
