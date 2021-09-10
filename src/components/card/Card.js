import React from 'react'
import './card.css'

export const Card = (props) => {
  const tarefa = props.tarefas;
  return (
    <div className="card">
      <div className="cardTitulo">
        <h2>{tarefa.titulo}</h2>
      </div>
      <div className="cardStatus">
        <h4>{tarefa.status}</h4>
      </div>
      <div className="cardFooter">
        <h4>{tarefa.prioridade}</h4>
      </div>
    </div>
  )
}


