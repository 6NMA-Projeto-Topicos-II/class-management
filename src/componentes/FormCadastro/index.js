import Button from "../Button"
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
            if(response?.data?.message) {
                alert(response.data.message)
            } else {
                alert('Aconteceu um erro inesperado ao efetuar o seu login! Entre em contato com o suporte!');
            }
        }
    }


    return (
        <form className="form-cadastro" onSubmit={handleSubmit(createCadastro)}>
            <div className="input-div">
                <div className="input-group">
                    <input
                    className="input-cadastro" 
                    placeholder="Nome"
                    id="nome"
                    {...register('name')}/>
                    {errors.name && <span>{errors.name.message}</span>}

                <div className="input-div">
                    <input
                    className="input-cadastro" 
                    placeholder="Sobrenome"
                    id="sobrenome"
                    {...register('lastname')}/>
                    {errors.lastname && <span>{errors.lastname.message}</span>}
                </div>
                </div>
                </div>

            <div className="input-div">
                <input
                className="input-cadastro" 
                placeholder="Matricula"

                id="matricula"
                {...register('registration')}/>
                {errors.registration && <span>{errors.registration.message}</span>}

            </div>
            
            <div className="input-div">
                <input 
                className="input-cadastro"
                type="email"
                id="email"
                placeholder="Email"
                {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="input-div">
                <input
                className="input-cadastro"            
                placeholder="Senha"

                id="senha"
                {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span>}

            </div>

            <Button type="submit" className="botao-cadastro"> Enviar </Button>
        </form>
        
    )
}