import React from "react";
import { Link } from "react-router-dom";

function ConcluirTarefa() {
  return (
    <div className="img-statico">
      <Link to="/cadastro-orden-servico-b">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/antipraga.png?alt=media&token=7bd329e3-ab3b-408a-83e1-f953cf2230b8"
          alt="Concluir Tarefa"
        />
      </Link>
    </div>
  );
}

export default ConcluirTarefa;
