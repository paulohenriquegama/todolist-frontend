import React, { useEffect, useState } from 'react'
import Api from '../../api/api';
import './view.css'
import Delete from '../delete/Delete'


const View = (props) => {
  const [tarefa, setTarefa] = useState({})

  const id = props.match.params.id;
  console.log('Id: ', id)
  useEffect(() => {
    getTarefaById();   
  },[])

  const getTarefaById = () => {
    Api.get(`tarefas/${id}`).then((response) => {
      setTarefa(response.data);
    })
  }


  return (
    <div className="view">
      <h3 className='viewItem'>Titulo: {tarefa.titulo}</h3>
      <h3 className='viewItem'>Descrição: {tarefa.desc}</h3>
      <h3 className='viewItem'>Prioridade: {tarefa.prioridade}</h3>
      <h3 className='viewItem'>Status: {tarefa.status}</h3>
      <h3 className='viewItem'>Prazo: {tarefa.prazo}</h3>
      <h3 className='viewItem'>Data Criação: {tarefa.dataCriacao}</h3>
      <div className='bloco-button'>
        <Delete tarefa={tarefa}/>
      </div>
    </div>
  )
}

export default View
