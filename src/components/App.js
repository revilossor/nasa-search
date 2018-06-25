import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import DetailPage from '../containers/DetailPage'
import './App.css'

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <Switch>
        <Route exact path='/nasa-search/' component={SearchPage} />
        <Route exact path='/nasa-search/search' component={SearchPage} />
        <Route exact path='/nasa-search/asset/:id' component={DetailPage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
