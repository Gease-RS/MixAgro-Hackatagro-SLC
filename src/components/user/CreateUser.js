import { useState } from "react";
import { db } from "../../services/firebase"

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleCreateLayout = async (event) => {
    event.preventDefault()
    db.collection('users').add({
      name,
      email,
      password,
    })
    .then(() => {
      setName("")
      setEmail("")
      setPassword("")
      alert("Gravado com Sucesso")
      console.log("Gravado com Sucesso")
    })
    .catch((error) => {
    console.error("Error adding document: ", error);
    })
   
  }
  return (
    <>
       <form onSubmit={handleCreateLayout}>
              <div className="">
                <div className="">
                  <label className="">
                    Nome do Usuário <abbr title="required">*</abbr>
                  </label>
                  <input
                    placeholder=""
                    className=""
                    required="required"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="">
                  <label className="">
                    Email <abbr title="required">*</abbr>
                  </label>
                  <input
                    placeholder="usuario@slc.com.br"
                    className=""
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <label className="">
                  URL Banner<abbr title="required">*</abbr>
                </label>
                <input
                  placeholder=""
    
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button
                type="submit"
              >
                Próximo
              </button>
            </form>  
  
    </>
  );
}
