import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../Api/posts";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./style.css";
import Button from "../Button/index";

const createLoginSchema = z.object({
  registration: z
    .string()
    .nonempty("Matrícula obrigatória")
    .min(8, "Matrícula inválida"),
  password: z
    .string()
    .nonempty("Senha obrigatória")
    .min(6, "Mínimo 6 caracteres"),
});

export default function FormLogin() {
  const [output, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createLoginSchema),
  });

  const navigate = useNavigate();

  async function Login(data) {
    setOutput(JSON.stringify(data, null, 2));
    console.log(output);
    try {
      api.request({
          url: "Login",
          method: "POST",
          data: output,
        })
        .then((resposta) => {
          console.log(resposta.status);
          console.log(resposta);
          sessionStorage.setItem('token', true)
          navigate('/logado/home')
        })
        .catch((erro) => {
          console.log("erro");
          console.log(erro);
          console.log(erro?.response?.data);
        });
    } catch (err) {
      console.log(`Erro: ${err.message}`);
    }
  }

  return (
    <form className="form-cadastro" onSubmit={handleSubmit(Login)}>
      <div className="input-div">
        <input
          className="input-cadastro"
          placeholder="Matricula"
          {...register("registration")}
        />
        {errors.matricula && <span>{errors.matricula.message}</span>}
      </div>
      <div className="input-div">
        <input
          className="input-cadastro"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.senha && <span>{errors.senha.message}</span>}
      </div>

      <Button type="submit" className="botao-cadastro">
        Login
      </Button>
    </form>
  );
}
