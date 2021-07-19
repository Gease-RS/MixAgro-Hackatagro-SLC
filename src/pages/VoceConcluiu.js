import React from "react";
import { Link } from "react-router-dom";

function VoceConcluiu() {
  return (
    <div className="img-statico">
      <Link to="verificacao-ph">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/voce-concluiu.png?alt=media&token=c624151d-1890-4145-b0d1-ec7a199deeae"
          alt="Verificao caldeira"
        />
      </Link>
    </div>
  );
}

export default VoceConcluiu;
