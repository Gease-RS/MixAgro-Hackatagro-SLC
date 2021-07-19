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
import Produto from "./pages/Produto";
import ListaProduto from "./pages/ListaProduto";
import TarefaAberta from "./pages/TarefaAberta";
import OrdemServicoCalda from "./pages/ordensServico/OrdemServicoCalda";
import ConcluirTarefa from "./pages/ConcluirTarefa";
import VerificacaoPH from "./pages/VerificacaoPH";
import VerificacaoCaldeira from "./pages/VerificacaoCaldeira";
import AntiPragaAProdutoY from "./pages/AntiPragaProdutoY";
import AntiPragaAProdutoX from "./pages/AntiPragaAProdutoX";
import AntiPragaAProdutoC from "./pages/AntiPragaAProdutoC";
import AntiPragaAProdutoZ from "./pages/AntiPragaAProdutoZ";
import OqueFuncionou from "./pages/OqueFuncionou";
import ProcessoFinalizou from "./pages/ProcessoFinalizou";
import VoceConcluiu from "./pages/VoceConcluiu";

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
          <Route path="/tarefa-aberta" component={TarefaAberta} />
          <Route path="/produto" component={Produto} />
          <Route path="/lista-produto" component={ListaProduto} />
          <Route path="/ordem-servico-calda" component={OrdemServicoCalda} />
          <Route path="/concluir-tarefa" component={ConcluirTarefa} />
          <Route path="/verificacao-ph" component={VerificacaoPH} />
          <Route path="/verificacao-caldeira" component={VerificacaoCaldeira} />
          <Route
            path="/processo-antipraga-produto-x"
            component={AntiPragaAProdutoX}
          />
          <Route
            path="/processo-antipraga-produto-y"
            component={AntiPragaAProdutoY}
          />
          <Route
            path="/processo-antipraga-produto-c"
            component={AntiPragaAProdutoC}
          />
          <Route
            path="/processo-antipraga-produto-z"
            component={AntiPragaAProdutoZ}
          />
          <Route path="/o-que-funcionou" component={OqueFuncionou} />
          <Route path="/processo-finalizou" component={ProcessoFinalizou} />
          <Route path="/voce-concluiu" component={VoceConcluiu} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
