import Button from "../Button/index"
import "./style.css"
import { useForm } from "react-hook-form" 
import { useState } from "react"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createCadastroSchema = z.object({
    name: z.string()
    .nonempty('Nome obrigatório'),
    lastname: z.string()
    .nonempty('Sobrenome obrigatório'),
    registration: z.string()
    .nonempty('Matrícula obrigatória')
    .min(8, 'Matrícula inválida'),
    email: z.string()
    .nonempty('Email obrigatório')
    .email('Email inválido')
    .toLowerCase(),
    password: z.string()
    .nonempty('Senha obrigatória')
    .min(6, 'Mínimo 6 caracteres')
})

export default function FormCadastro() {
    const [output, setOutput] = useState('')
    const { register,
         handleSubmit, 
         formState: {errors}} = useForm({
        resolver: zodResolver(createCadastroSchema)
    })

    async function createCadastro(data) {
        setOutput(JSON.stringify(data, null, 2))
        console.log(output)
        try {
            const response = await fetch(`http://85.31.230.148:7020/v1/Register`, {
               method:'POST',
               body: output,
               headers: {"Content-type": "application/json"}
            })
            console.log(response)
        } catch (response) {
            console.log(response)
        }
    }


    return (
        <form className="form-cadastro" onSubmit={handleSubmit(createCadastro)}>
            <div className="input-div">
                <input
                className="input-cadastro" 
                placeholder="Nome"
                {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div className="input-div">
                <input
                className="input-cadastro" 
                placeholder="Sobrenome"
                {...register('lastname')}/>
                {errors.lastname && <span>{errors.lastname.message}</span>}
            </div>

            <div className="input-div">
                <input
                className="input-cadastro" 
                placeholder="Matricula"
                {...register('registration')}/>
                {errors.registration && <span>{errors.registration.message}</span>}
            </div>
            
            <div className="input-div">
                <input 
                className="input-cadastro"
                type="email"
                placeholder="Email"
                {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="input-div">
                <input
                className="input-cadastro"            
                placeholder="Senha"
                {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <Button type="submit" className="botao-cadastro"> Cadastrar </Button>
        </form>
        
    )
}