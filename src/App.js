import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import CreateUser from "./components/user/CreateUser";
import CreateOrdem from "./components/ordens/CreateOrdem";
import CreateProduto from "./components/produtos/CreateProduto";
import AccountCreate from "./pages/account/accountCreate";
import AccountComplement from "./pages/account/accountComplement";
import ListOrdensServico from "./pages/ordensServico/ListOrdensServico";
import CadastroOrdemServicoA from "./pages/ordensServico/CadastroOrdemServicoA";
import CadastroOrdemServicoB from "./pages/ordensServico/CadastroOrdemServicoB";
import CadastroOrdemServicoC from "./pages/ordensServico/CadastroOrdemServicoC";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/account-create" exact component={AccountCreate} />
          <Route
            path="/account-complement"
            exact
            component={AccountComplement}
          />
          <Route path="/" exact component={Home} />
          <Route path="/create-user" component={CreateUser} />
          <Route path="/create-ordem" component={CreateOrdem} />
          <Route path="/create-produto" component={CreateProduto} />
          <Route path="/list-ordens-servico" component={ListOrdensServico} />
          <Route
            path="/cadastro-orden-servico-a"
            component={CadastroOrdemServicoA}
          />
          <Route
            path="/cadastro-orden-servico-b"
            component={CadastroOrdemServicoB}
          />
          <Route
            path="/cadastro-orden-servico-c"
            component={CadastroOrdemServicoC}
          />
          <Route path="/tarefa-aberta" component={CadastroOrdemServicoC} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
