import { Outlet } from "react-router-dom";
import NavBar from "../../Componentes/Navbar/index.js";
import PaginaNaoLogado from "../naoLogado/index.js";

export default function AreaLogada() {
  const logado = sessionStorage.getItem("token");

  if (logado === "true") {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  } else {
    return <PaginaNaoLogado/>
}
}