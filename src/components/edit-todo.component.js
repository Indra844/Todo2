import React from 'react';
import axios from 'axios';

class EditTodo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description:'',
            responsibility:'',
            priority:'',
            completed:false,
            todos:[]
        }
        this.onChangeCompleted=this.onChangeCompleted.bind(this);
        this.onChangeDesc=this.onChangeDesc.bind(this);
        this.onChangePriority=this.onChangePriority.bind(this);
        this.onChangeRes=this.onChangeRes.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentDidMount(){
        axios.get('http//localhost:4000/todo/',+this.props.match.params._id)
          .then(response =>{
              this.setState({
                  description:response.data.description,
                  responsibility:response.data.responsibility,
                  priority:response.data.priority,
                  completed:response.data.completed
              });
          })
          .catch(function(error){
              console.log(error);
          })
    }
    onChangeDesc(e){
        this.setState({
            description:e.target.value
        })
    }
    onChangeRes(e){
        this.setState({
            responsibility:e.target.value
        })
    }
    onChangePriority(e){
        this.setState({
            priority:e.target.value
        })
    }
    onChangeCompleted(){
        this.setState({
            completed:!this.state.completed
        })
    }

    onSubmit(e){
        e.preventDefault();
        const obj={
            description:this.state.description,
            responsibility:this.state.responsibility,
            priority:this.state.priority,
            completed:this.state.completed
        };
        console.log(obj);
        axios.post('http//localhost:4000/todo/update/'+this.props.match.params._id,obj)
          .then(res=>{
              this.setState({todos:res.data})
              console.log(res.data)
          });
          this.props.history.push('/');

    }
    render(){
        return(
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDesc} />

                    </div>
                    <div className="form-group">
                        <label>Responsible:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.responsibility}
                            onChange={this.onChangeRes}
                             />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                id="priority"
                                name="Priorityoptions"
                                value="Low"
                                checked={this.state.priority === 'Low'}
                                onChange={this.onChangePriority} />

                            <label className="form-check-label">Low</label>

                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                id="priority1"
                                value="Medium"
                                name="Priorityoptions"
                                checked={this.state.priority==='Medium'}
                                onChange={this.onChangePriority} />

                            <label className="form-check-label">Medium</label>

                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                id="priority2"
                                name="Priorityoptions"
                                value="High"
                                checked={this.state.priority==='High'}
                                onChange={this.onChangePriority} />

                            <label className="form-check-label">High</label>

                        </div>

                        <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeCompleted}
                                checked={this.state.completed}
                                value={this.state.completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>

                </form>

            </div>
        )
    }
}
export default EditTodo;