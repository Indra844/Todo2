import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateTodo extends React.Component {
    constructor() {
        super()
        this.state = {
            description: '',
            responsibility: '',
            priority: '',
            completed: false
        }

        this.onChangeDesc=this.onChangeDesc.bind(this);
        this.onChangePriority=this.onChangePriority.bind(this);
        this.onChangeRes=this.onChangeRes.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChangeDesc(e){
        this.setState({
            description:e.target.value
        });
    }

    onChangeRes(e){
        this.setState({
            responsibility:e.target.value
        });

    }

    onChangePriority(e){
        this.setState({
            priority:e.target.value
        });
    }
    onSubmit(event){
        event.preventDefault();

        const newTodo = {
            description:this.state.description,
            responsibility:this.state.responsibility,
            priority:this.state.priority,
            completed:this.state.completed
        };

        axios.post('http://localhost:4000/todo/add',newTodo)
          .then(res =>console.log(res.data));

        this.setState({
            description:'',
            responsibility:'',
            priority:'',
            completed:false
        })
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Todo</h3>
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

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>

                </form>

            </div>
        )
    }
}
export default CreateTodo;