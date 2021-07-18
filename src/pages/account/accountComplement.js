import { useState } from "react";
import { db } from "../../services/firebase";
import { useHistory, Link } from "react-router-dom";
import "./index.css";

const AccountComplement = () => {
  const [fazenda, setFazenda] = useState();
  const [cargo, setCargo] = useState();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    db.collection("accountscomp")
      .add({
        fazenda,
        cargo,
      })
      .then(() => {
        setFazenda("");
        setCargo("");
        alert("Gravado com Sucesso");
        console.log("Gravado com Sucesso");
        history.push("/account-complement");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="header-titulo">
          <h2>Criação de Conta</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="bloco-input">
              <label className="">Fazendas</label>
              <input
                placeholder=""
                required="required"
                type="text"
                value={fazenda}
                onChange={(event) => setFazenda(event.target.value)}
              />
            </div>
            <div className="bloco-input">
              <label className="">Cargo</label>
              <input
                placeholder=""
                required="required"
                type="text"
                value={cargo}
                onChange={(event) => setCargo(event.target.value)}
              />
            </div>
          </div>

          <div className="bloco-termo">
            <div className="check-termo">
              <input
                type="checkbox"
                id="termo"
                name="termo"
                style={{ background: "#000 !import" }}
              />
            </div>
            <div className="concordo-termo">
              <label for="termo">Concordo com os termos de uso</label>
            </div>
          </div>
          <button className="btn-complement" type="submit">
            Finalizar
          </button>
          <div>
            <p>
              <Link className="account" to="/account-create">
                Voltar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountComplement;
