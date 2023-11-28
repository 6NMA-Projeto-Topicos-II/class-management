import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/Navbar/index.js";

export default function AreaLogada() {
  const logado = sessionStorage.getItem("token");
  const navigate = useNavigate();

  if (logado === "true") {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  } else {
    return navigate("/");
  }
}
