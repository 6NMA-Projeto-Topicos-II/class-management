import { useForm } from "react-hook-form" 
import { useState } from "react"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import "./style.css"
import Button from "../Button/index"

const createLoginSchema = z.object({
    matricula: z.string()
    .nonempty('Matrícula obrigatória')
    .min(8, 'Matrícula inválida'),
    senha: z.string()
    .nonempty('Senha obrigatória')
    .min(6, 'Mínimo 6 caracteres')
})

export default function FormLogin() {
    const [output, setOutput] = useState('')
    const { register,
         handleSubmit, 
         formState: {errors}} = useForm({
        resolver: zodResolver(createLoginSchema)
    })

    async function Login(data) {
        alert("entrou")
        setOutput(JSON.stringify(data, null, 2))
        console.log(output)
        try {
            const response = await fetch(`http://85.31.230.148:7020/v1/Login`, {
               method:'POST',
               body: output,
               headers: {"Content-type": "application/json"}
            })
            console.log(response.body)
            // sessionStorage.setItem('token', response.data.access_token) */
        } catch (response) {
            if(response.body) {
                     alert(response.body)
                 } else {
                     alert('Aconteceu um erro inesperado ao efetuar o seu login! Entre em contato com o suporte!');
                 }
        }
    }

    return (
    <form className="form-cadastro" onSubmit={handleSubmit(Login)}>
            <div className="input-div">
                <input
                className="input-cadastro" 
                placeholder="Matricula"
                {...register('matricula')}/>
                {errors.matricula && <span>{errors.matricula.message}</span>}
            </div>
            <div className="input-div">
                <input
                className="input-cadastro"            
                placeholder="Senha"
                {...register('senha')}/>
                {errors.senha && <span>{errors.senha.message}</span>}
            </div>
            <div className="checkbox-div">
                <Button type="checkbox" className="checkbox"></Button>
                <label>Mantenha-me conectado</label>
            </div>
            
            <Button type="submit" className="botao-cadastro"> Login </Button>
        </form>
    )
}