import React from "react";
import { Link } from "react-router-dom";

function Produto() {
  return (
    <div className="img-statico">
      <Link to="/cadastro-orden-servico-a">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/Detalhes%20do%20produto.png?alt=media&token=8f12d573-5dc3-4f49-8a08-8e9f2bd6e479"
          alt="Produto"
        />
      </Link>
    </div>
  );
}

export default Produto;
