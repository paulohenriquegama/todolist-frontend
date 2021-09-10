import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../pages/home/Home'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
  )
}

export default Routes

