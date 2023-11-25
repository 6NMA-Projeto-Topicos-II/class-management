import { useNavigate } from "react-router-dom";
import Button from "../../Componentes/Button";
import FormLogin from "../../Componentes/FormLogin";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();

  function cadastrarse() {
    return navigate("/cadastro");
  }

  return (
    <div>
      <div className="main-div">
        <h1 className="title">login</h1>
        <FormLogin></FormLogin>
      </div>
      <div className="second-div">
        <h3 className="title2">não possui conta?</h3>
        <Button className="cadastro-botao" onClick={cadastrarse}>
          Cadastra-se
        </Button>
      </div>
    </div>
  );
}
