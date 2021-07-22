import React, {Fragment} from 'react'
import Header from './components/Header'
import './App.css'
import Todos from './components/Todos'

const App = () =>{
  return  (
    <Fragment>
    <Header/>
    <Todos/>
    </Fragment>
  )
}

export default App;