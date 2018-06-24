import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import DetailPage from '../containers/DetailPage'
import './App.css'

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/asset/:id' component={DetailPage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
