import { useEffect, useState } from "react"
import { db } from '../../services/firebase'

function ListOrdens() {
      const [ordens, setOrdens] = useState([])

  useEffect(() => {
   const fetchData = async () => {
     const result = await db
        .collection('ordens')
        .get();
        
    const fetchData = result.docs.map((item) => ({
        ...item.data()
    }));
    setOrdens(fetchData)
    console.log(fetchData)
    return fetchData
   }
  fetchData()

}, [])
    return (
        <>
            {ordens.map((orden, i) => (
           <ul key={i}>
              <li>{orden.identificador}</li>
              <li>{orden.prescricao}</li>
              <li>{orden.safra}</li>
              <li>{orden.status}</li>
            </ul>
            ))}
        </>
    )
}

export default ListOrdens
