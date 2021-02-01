import React from 'react';
import logo from './logo.svg'

import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodoList from './components/todo-list.component';

class App extends React.Component{
  render(){
    return(
      <Router>
      <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodoList} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/edit/:id" component={EditTodo} />

      </div>
      </Router>
    )
  }
}


export default App;
