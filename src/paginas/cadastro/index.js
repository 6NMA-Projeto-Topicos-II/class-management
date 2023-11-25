import { useNavigate } from "react-router-dom";
import Button from "../../Componentes/Button";
import FormCadastro from "./../../Componentes/FormCadastro/index";
import "./style.css";

export default function Cadastro() {
  const navigate = useNavigate();

  function voltar() {
    return navigate("/");
  }

  return (
    <div>
      <Button className="voltar-botao" onClick={voltar}>
Voltar
      </Button>
    <div className="main-div">
      <h1>Cadastre-se</h1>
      <FormCadastro></FormCadastro>
    </div>
    </div>
  );
}
