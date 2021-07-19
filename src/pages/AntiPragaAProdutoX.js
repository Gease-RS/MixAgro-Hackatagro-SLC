import React from "react";
import { Link } from "react-router-dom";

function AntiPragaAProdutoX() {
  return (
    <div className="img-statico">
      <Link to="processo-antipraga-produto-y">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/antipraga-arroz10kg.png?alt=media&token=05919a47-ae09-4b17-ad43-d23a6b67522f"
          alt="Processo Anti Praga produto X"
        />
      </Link>
    </div>
  );
}

export default AntiPragaAProdutoX;
