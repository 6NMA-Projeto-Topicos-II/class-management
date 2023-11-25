import { useNavigate } from "react-router-dom";
import Button from "../../Componentes/Button";
import "./style.css";

export default function PaginaNaoLogado() {
    const navigate = useNavigate();
    
    function voltar() {
      return navigate('/')
  }
    
  return (
    <div className="nao-logado-div">
      <h1> Voce nao esta logado</h1>
      <Button className="cadastro-botao" onClick={voltar}> Logar </Button>
    </div>
  );
}