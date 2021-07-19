import React from "react";
import { Link } from "react-router-dom";

function ProcessoFinalizou() {
  return (
    <div className="img-statico">
      <Link to="/o-que-nao-funcionou">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/processo-finalizou.png?alt=media&token=a8d5bb5a-6f87-4cc7-84d4-87aa007b5868"
          alt="Processo Anti Praga Finalizado"
        />
      </Link>
    </div>
  );
}

export default ProcessoFinalizou;
