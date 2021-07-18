import React from "react";
import { Link } from "react-router-dom";

function CadastroOrdemServicoC() {
  return (
    <div className="img-statico">
      <Link to="/tarefa-aberta">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/3.png?alt=media&token=187e77e9-0572-492e-9bf6-0c1c9ac0f948"
          alt="Ordem de Serviço"
        />
      </Link>
    </div>
  );
}

export default CadastroOrdemServicoC;
