import React, {Component} from 'react'
// import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import App from './pages/App'
import Home from './pages/home/Home'
import List from './pages/list/List'

export default class Root extends Component {
  render () {
    return (
      <BrowserRouter>
        <App>
          <Route component={Home} path='/' exact={true}/>
          <Route component={List} path='/list'/>
        </App>
      </BrowserRouter>
    )
  }
}