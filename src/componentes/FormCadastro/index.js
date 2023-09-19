import Button from "../Button/index"
import "./style.css"
import { useForm } from "react-hook-form" 
import { useState } from "react"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createCadastroSchema = z.object({
    nome: z.string()
    .nonempty('Nome obrigatório'),
    sobrenome: z.string()
    .nonempty('Sobrenome obrigatório'),
    matricula: z.string()
    .nonempty('Matrícula obrigatória')
    .min(8, 'Matrícula inválida'),
    email: z.string()
    .nonempty('Email obrigatório')
    .email('Email inválido')
    .toLowerCase(),
    senha: z.string()
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

    function createCadastro(data) {
        setOutput(JSON.stringify(data, null, 2))
        console.log(output)
        }


    return (
        <form className="form-cadastro" onSubmit={handleSubmit(createCadastro)}>
            <div className="input-div">
                <input
                className="input-cadastro" 
                placeholder="Nome"
                {...register('nome')}/>
                {errors.nome && <span>{errors.nome.message}</span>}
            </div>

            <div className="input-div">
                <input
                className="input-cadastro" 
                placeholder="Sobrenome"
                {...register('sobrenome')}/>
                {errors.sobrenome && <span>{errors.sobrenome.message}</span>}
            </div>

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
                type="email"
                placeholder="Email"
                {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="input-div">
                <input
                className="input-cadastro"            
                placeholder="Senha"
                {...register('senha')}/>
                {errors.senha && <span>{errors.senha.message}</span>}
            </div>

            <Button type="submit" className="botao-cadastro"> Cadastrar </Button>
        </form>
        
    )
}