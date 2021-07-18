import React from "react";
import { Link } from "react-router-dom";

function ListaProduto() {
  return (
    <div className="img-statico">
      <Link to="/lista-produto">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/Lista%20de%20produtos.png?alt=media&token=4430c1b6-41c7-4cd0-81b5-8e100ea86584"
          alt="Lista de produto"
        />
      </Link>
    </div>
  );
}

export default ListaProduto;
