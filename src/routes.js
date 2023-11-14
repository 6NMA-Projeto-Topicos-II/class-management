import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import Cadastro from "./paginas/cadastro";
import NavBar from "./Componentes/Navbar";
import Configurações from "./paginas/configurações";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/configurações" element={<Configurações/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
