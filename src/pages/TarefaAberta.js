import React from "react";
import { Link } from "react-router-dom";

function TarefaAberta() {
  return (
    <div className="img-statico">
      <Link to="lista-produto">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/Cadastro%20concluido.png?alt=media&token=9887174a-cde5-4b78-9bb6-79b0f7270000"
          alt="Tarefa aberta"
        />
      </Link>
    </div>
  );
}

export default TarefaAberta;
