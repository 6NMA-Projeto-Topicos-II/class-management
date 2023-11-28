import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/home";
import Configurações from "./paginas/configurações";
import Cadastro from "./paginas/cadastro";
import Login from "./paginas/login";
import Lab from "./paginas/lab";
import AreaLogada from "./paginas/areaLogada/index.js";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/logado" element={<AreaLogada />}>
          <Route path="home" element={<Home />} />
          <Route path="configurações" element={<Configurações />} />
          <Route path="Laboratorios" element={<Lab />} />
        </Route>
        <Route path="*" element={<div>Página não encontrada</div>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
