import React, { useState } from 'react';
import Card from '../../componentes/Card';
import Cabecalho from '../../componentes/Cabecalho';
import Navegacao from '../../componentes/Navegacao'
import "./style.css"

export default function Home() {
  const [filter, setFilter] = useState('Todos');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filterCards = (card) => {
    if (filter === 'Todos') {
      return true;
    } else if (filter === 'Disponível') {
      return card.estado === 'Disponível';
    } else if (filter === 'Manutenção') {
      return card.estado === 'Manutenção';
    } else if (filter === 'Em Aula') {
      return card.estado === 'Em aula';
    } else if (filter === 'Acesso Livre') {
      return card.estado === "Acesso Livre"
    }
  };

  const cards = [
    { lab: "Laboratório L-101", estado: "Acesso Livre" },
    { lab: "Laboratório L-102", estado: "Disponível" },
    { lab: "Laboratório L-103", estado: "Manutenção" },
    { lab: "Laboratório L-105", estado: "Manutenção" },
    { lab: "Laboratório L-104", estado: "Em aula" }
    

  ];

  console.log("Filter:", filter);
  console.log("Filtered Cards:", cards.filter(filterCards));

  return (
    <div className="main">

      <div className="navegacaoHome">
        <Navegacao />
      </div>

      <div className="cabecalho">
        <Cabecalho onSelectChange={handleFilterChange} />
      </div>

      <div className="organization-of-cards">
        {cards
          .filter(filterCards)
          .map((filteredCard, index) => (
            <Card key={index} lab={filteredCard.lab} estado={filteredCard.estado} />
          ))}
      </div>
    </div>
  );
}
