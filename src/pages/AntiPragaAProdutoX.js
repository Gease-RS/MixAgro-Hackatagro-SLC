import React from "react";
import { Link } from "react-router-dom";

function AntiPragaAProdutoX() {
  return (
    <div className="img-statico">
      <Link to="verificacao-ph">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/antipraga-arroz-4kg.png?alt=media&token=81082875-46bd-4636-a149-0ae008a90fd4"
          alt="Processo Anti Praga produto X"
        />
      </Link>
    </div>
  );
}

export default AntiPragaAProdutoX;
