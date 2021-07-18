import { useState } from "react";
import { db } from "../../services/firebase";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";

export default function CreateOrdens() {
  const [identificador, setIdentificador] = useState("");
  const [prescricao, setPrescricao] = useState("");
  const [safra, setSafra] = useState("");

  const handleCreateOrdem = async (event) => {
    event.preventDefault();
    db.collection("ordens")
      .add({
        identificador,
        prescricao,
        safra,
      })
      .then(() => {
        setIdentificador("");
        setPrescricao("");
        setSafra("");
        alert("Gravado com Sucesso");
        console.log("Gravado com Sucesso");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <>
      <form onSubmit={handleCreateOrdem}>
        <div className="">
          <div className="">
            <label className="">Identificador</label>
            <Input
              placeholder=""
              className=""
              required="required"
              type="text"
              value={identificador}
              onChange={(event) => setIdentificador(event.target.value)}
            />
          </div>
          <div className="">
            <label className="">Prescrição</label>
            <Input
              placeholder=""
              className=""
              type="text"
              value={prescricao}
              onChange={(event) => setPrescricao(event.target.value)}
            />
          </div>
          <div className="">
            <label className="">Safra</label>
            <Input
              placeholder="02/2021"
              className=""
              type="text"
              value={safra}
              onChange={(event) => setSafra(event.target.value)}
            />
          </div>
        </div>
        <Button type="submit">Criar Ordem</Button>
      </form>
    </>
  );
}
