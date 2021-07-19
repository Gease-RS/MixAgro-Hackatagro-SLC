import React from "react";
import { Link } from "react-router-dom";

function AntiPragaAProdutoC() {
  return (
    <div className="img-statico">
      <Link to="/processo-finalizou">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/antipraga-produto-c.png?alt=media&token=11a6031c-04b5-49fb-a5d9-e333c223b8d3"
          alt="Processo Anti Praga produto C"
        />
      </Link>
    </div>
  );
}

export default AntiPragaAProdutoC;
