import { useState } from "react";
import { db } from "../../services/firebase";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";

function CreateProduto() {
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");
  const [combate, setCombate] = useState("");
  const [utilizacao, setUtilizacao] = useState("");

  const handleCreateProduto = async (event) => {
    event.preventDefault();
    db.collection("ordens")
      .add({
        name,
        descricao,
        combate,
        utilizacao,
      })
      .then(() => {
        setName("");
        setDescricao("");
        setCombate("");
        setUtilizacao("");
        alert("Gravado com Sucesso");
        console.log("Gravado com Sucesso");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <>
      <form onSubmit={handleCreateProduto}>
        <div className="">
          <div className="">
            <label className="">Nome</label>
            <Input
              placeholder=""
              className=""
              required="required"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="">
            <label className="">Descrição</label>
            <Input
              placeholder=""
              className=""
              type="text"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            />
          </div>
          <div className="">
            <label className="">Combate as pragas</label>
            <Input
              placeholder=""
              className=""
              type="text"
              value={combate}
              onChange={(event) => setCombate(event.target.value)}
            />
          </div>
          <div className="">
            <label className="">Combate as pragas</label>
            <Input
              placeholder=""
              className=""
              type="text"
              value={utilizacao}
              onChange={(event) => setUtilizacao(event.target.value)}
            />
          </div>
        </div>
        <Button type="submit">Criar Ordem</Button>
      </form>
    </>
  );
}

export default CreateProduto;
