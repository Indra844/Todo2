import React from 'react';
import Todo from './list';
import axios from 'axios';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos:[]
        }
        this.todoList=this.todoList.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todo/')
          .then(response =>{
              this.setState({todos:response.data});
          })
          .catch(function(error){
              console.log(error);
          })
    }

    todoList(){
        return this.state.todos.map((currentTodo,i)=>{
            return <Todo todo={currentTodo} key={i} />
        })
    }

    render(){
        return(
            <div>
               <h3>Todo Lists</h3>
               <table className="table table-striped" style={{marginTop:20}}>
                   <thead>
                       <tr>
                           <th>Description</th>
                           <th>Responsiblility</th>
                           <th>Priority</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.todoList()}
                   </tbody>
               </table>
            </div>
        )
    }
}
export default TodoList;