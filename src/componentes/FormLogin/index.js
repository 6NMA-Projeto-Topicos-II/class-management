import Button from "../Button/index"
import { useForm } from "react-hook-form" 
import { useState } from "react"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import "./style.css"

const createLoginSchema = z.object({
    matricula: z.string()
    .nonempty('Matrícula obrigatória')
    .min(8, 'Matrícula inválida'),
    senha: z.string()
    .nonempty('Senha obrigatória')
    .min(6, 'Mínimo 6 caracteres'),
    manterlogado: z.boolean()
})

export default function FormLogin() {
    const [output, setOutput] = useState('')
    const { register,
         handleSubmit, 
         formState: {errors}} = useForm({
        resolver: zodResolver(createLoginSchema)
    })

    function Login(data) {
        setOutput(JSON.stringify(data, null, 2))
        console.log(output)
    }

    return (
    <form className="form-login" onSubmit={handleSubmit(Login)}>
            <div className="input-div">
                <input
                className="input-cadastro" 
                placeholder="Matricula"
                id="matricula"
                {...register('matricula')}/>
                {errors.matricula && <span>{errors.matricula.message}</span>}
            </div>
            <div className="input-div">
                <input
                className="input-cadastro"            
                placeholder="Senha"
                id="senha"
                {...register('senha')}/>
                {errors.senha && <span>{errors.senha.message}</span>}
            </div>
            <div className="checkbox-div">
                <Button type="checkbox" className="checkbox"{...register('manterlogado')}></Button>
                <label>Mantenha-me conectado</label>
            </div>
            
            

            <Button type="submit" className="botao-cadastro"> LOGIN </Button>
        </form>
    )
}