import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [error, setError] = useState("");
  const history = useHistory();
  const { signUp } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("As senhas não são iguais");
    }
    try {
      setError("");
      await signUp(email, password);
      alert("Sua conta foi criada com Sucesso");
      history.push("/");
    } catch {
      setError("Falha ao criar a conta");
    }
  }

  return (
    <>
      <h2>Cadastro</h2>
      {error && <span>{error}</span>}
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <label className="">email</label>
            <Input
              placeholder=""
              required="required"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="">
            <label className="">Senha</label>
            <Input
              placeholder="*********"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="">
            <label className="">Confirmar Senha</label>
            <Input
              placeholder="*********"
              type="password"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
            />
          </div>
        </div>

        <Button type="submit">Criar Conta</Button>
      </form>
    </>
  );
};

export default SignUp;
