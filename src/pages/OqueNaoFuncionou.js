import React from "react";
import { Link } from "react-router-dom";

function OqueNaoFuncionou() {
  return (
    <div className="img-statico">
      <Link to="voce-concluiu">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/o-que-nao-funcionou.png?alt=media&token=95f49f06-8a1c-4dd3-b2a8-ffd9a9d81aac"
          alt="O que não funcionou no processo?"
        />
      </Link>
    </div>
  );
}

export default OqueNaoFuncionou;
