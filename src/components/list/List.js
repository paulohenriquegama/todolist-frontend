import React, { useEffect, useState } from 'react'
import { Card }  from '../card/Card'
import Api from '../../api/api'
import './list.css'

export const List = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas();   
  },[])
  
  const getTarefas = () => {
   Api.get("tarefas").then((response) => {
     setTarefas(response.data);

   })
   
    console.log("List",tarefas)
  }

  return (
    <div className='listContainer'>
        {tarefas.map((tarefa) => (
          <Card key={tarefa._id} tarefas={tarefa} />
        ))}
    </div>
  )
}