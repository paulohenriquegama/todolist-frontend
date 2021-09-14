import React from 'react'
import { Route, Switch } from 'react-router'
import Create from '../pages/create/Create'
import Home from '../pages/home/Home'
import View from '../pages/view/View'
import './routes.css'

function Routes() {
  return (
    <div className='routes'>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tarefas/:id" component={View}/>
        <Route path="/create" component={Create}/>
      </Switch>
    </div>
  )
}

export default Routes

