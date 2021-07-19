import React from "react";
import { Link } from "react-router-dom";

function VerificacaoCaldeira() {
  return (
    <div className="img-statico">
      <Link to="verificacao-ph">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/verificao-caldeira.png?alt=media&token=e7bee92e-821e-4187-aa89-e000c5daf6e9"
          alt="Verificao caldeira"
        />
      </Link>
    </div>
  );
}

export default VerificacaoCaldeira;
