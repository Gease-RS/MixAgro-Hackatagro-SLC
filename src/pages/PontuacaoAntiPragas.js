import React from "react";
import { Link } from "react-router-dom";

function PontuacaoAntiPragas() {
  return (
    <div className="img-statico">
      <Link to="verificacao-ph">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/pontuacao-antipragas.png?alt=media&token=6bb5e0a2-7d85-4579-927f-f3f921b82cc2"
          alt="Pontucaçã Anti Pragas"
        />
      </Link>
    </div>
  );
}

export default PontuacaoAntiPragas;
