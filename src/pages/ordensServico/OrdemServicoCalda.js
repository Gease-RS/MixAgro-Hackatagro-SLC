import React from "react";
import { Link } from "react-router-dom";

function OrdemServicoCalda() {
  return (
    <div className="img-statico">
      <Link to="/pontuacao-anti-pragas">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/Caldeiro.png?alt=media&token=98bf56e8-8d04-4be2-b3f8-566e19ff31f5"
          alt="Ordem de Serviço Calda"
        />
      </Link>
    </div>
  );
}

export default OrdemServicoCalda;
