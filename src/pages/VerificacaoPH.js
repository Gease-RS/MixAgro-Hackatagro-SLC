import React from "react";
import { Link } from "react-router-dom";

function VerificacaoPH() {
  return (
    <div className="img-statico">
      <Link to="verificacao-ph">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/verificacao-ph.png?alt=media&token=b9376c48-36ce-4502-91a4-800588c830a0"
          alt="Verificao-ph"
        />
      </Link>
    </div>
  );
}

export default VerificacaoPH;
