import React from 'react'
import { List } from '../../components/list/List';
import './home.css'


export default function Home() {
  return (
    <div className="homeContainer">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <body>
        <List/>
      </body>
    </div>
  )
}
