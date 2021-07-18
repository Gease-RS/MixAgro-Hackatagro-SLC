import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import CreateUser from "./components/user/CreateUser";
import CreateOrdem from "./components/ordens/CreateOrdem";
import CreateProduto from "./components/produtos/CreateProduto";
import ListOrdens from "./components/ordens/ListOrdens";
//import PrivateRoute from "./routes/PrivateRoute";
//import LoginRoute from "./routes/LoginRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={Home} />
          <Route path="/create-user" component={CreateUser} />
          <Route path="/create-ordem" component={CreateOrdem} />
          <Route path="/create-produto" component={CreateProduto} />
          <Route path="/list-ordens" component={ListOrdens} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
