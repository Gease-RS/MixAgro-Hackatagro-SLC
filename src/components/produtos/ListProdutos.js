import { useEffect, useState } from "react";
import { db } from "../../services/firebase";

function ListOrdens() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await db.collection("produtos").get();

      const fetchData = result.docs.map((item) => ({
        ...item.data(),
      }));
      setProdutos(fetchData);
      console.log(fetchData);
      return fetchData;
    };
    fetchData();
  }, []);
  return (
    <>
      {produtos.map((produto, i) => (
        <ul key={i}>
          <li>{produto.name}</li>
          <li>{produto.descricao}</li>
          <li>{produto.combate}</li>
          <li>{produto.utilizacao}</li>
        </ul>
      ))}
    </>
  );
}

export default ListOrdens;
