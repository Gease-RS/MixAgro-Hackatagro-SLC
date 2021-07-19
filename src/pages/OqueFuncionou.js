import React from "react";
import { Link } from "react-router-dom";

function OqueFuncionou() {
  return (
    <div className="img-statico">
      <Link to="verificacao-ph">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/o-que-nao-funcionou.png?alt=media&token=95f49f06-8a1c-4dd3-b2a8-ffd9a9d81aac"
          alt="O que funcionou no processo  Anti Pragas"
        />
      </Link>
    </div>
  );
}

export default OqueFuncionou;
