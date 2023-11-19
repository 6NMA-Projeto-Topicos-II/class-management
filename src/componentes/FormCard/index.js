import React, { useState } from "react";
import Button from "../Button/index";
import { useForm } from "react-hook-form"; 
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './style.css';

const createCardSchema = z.object({
  laboratorio: z.string(),
  estado: z.string(),
  professor: z.string().nonempty('Nome do professor obrigatório'),
  inicio: z.string().nonempty('Hora início obrigatória'),
  fim: z.string().nonempty('Hora fim obrigatória'),
});

const opcoesEstado = ['Disponível', 'Acesso Livre', 'Manutenção', 'Em Aula'];
const opcoesLaboratorio = [
  'L-101', 'L-102', 'L-103', 'L-104', 'L-105', 'L-106', 'L-107',
  'L-308', 'E-201', 'E-202', 'D-202'
];

export default function FormCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCardSchema),
  });

  const [mostrarCamposAula, setMostrarCamposAula] = useState(false);

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-div">
        <label>Código do Laboratório:</label>
        <select
          className="input-card"
          {...register('laboratorio')}
        >
          {opcoesLaboratorio.map((lab) => (
            <option key={lab} value={lab}>
              {lab}
            </option>
          ))}
        </select>
        {errors.laboratorio && <span>{errors.laboratorio.message}</span>}
      </div>

      <div className="input-div">
        <label>Estado:</label>
        <select
          className="input-card"
          {...register('estado')}
          onChange={(e) => setMostrarCamposAula(e.target.value === 'Em Aula')}
        >
          {opcoesEstado.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>
        {errors.estado && <span>{errors.estado.message}</span>}
      </div>

      {mostrarCamposAula && (
        <>
          <div className="input-div">
            <input
              className="input-card"
              placeholder="Nome do Professor"
              {...register('professor')}
            />
            {errors.professor && <span>{errors.professor.message}</span>}
          </div>

          <div className="input-div">
            <input
              className="input-card"
              placeholder="Horário de Início"
              {...register('inicio')}
            />
            {errors.inicio && <span>{errors.inicio.message}</span>}
          </div>

          <div className="input-div">
            <input
              className="input-card"
              placeholder="Horário de Fim"
              {...register('fim')}
            />
            {errors.fim && <span>{errors.fim.message}</span>}
          </div>
        </>
      )}

      <Button type="submit" className="botao-salvar">SALVAR</Button>
    </form>
  );
}