import { Route, Routes } from 'react-router-dom';
import Home from "./paginas/home/index"
import Cadastro from "./paginas/home/index"
import Configurações from './paginas/configurações/index';
import { Login } from './paginas/login';

export  default function Rotas() {
        <Routes>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/configurações" element={<Configurações/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
}