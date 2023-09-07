import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import Cadastro from "./paginas/cadastro";

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="*" element={<div>Página não encontrada</div>}/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
