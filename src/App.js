import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Componentes/Navbar/index"
import Home from "./paginas/home";
import Configurações from "./paginas/configurações";
import Cadastro from "./paginas/cadastro";
import Login from "./paginas/login";

function App () {
  return (
        <BrowserRouter>
          <Navbar/>
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
