import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import Cadastro from "./paginas/cadastro";
import NavBar from "./Componentes/Navbar";
import Configurações from "./paginas/configurações";
import { Login } from "./paginas/login";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/configurações" element={<Configurações/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
