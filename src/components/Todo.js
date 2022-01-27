import React, { Component } from 'react';

export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ task: 'Task 1', id: 1121 }, { task: 'Task 2', id: 2112 }, { task: 'Task 3', id: 5121 }],
            currtask: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            currtask: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, { task: this.state.currtask, id: this.state.currtask.length + 1 }]
            , currtask: ''
        })
    }
    handleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj) => {
            return taskObj.id != id
        })
        this.setState({
            tasks: [...narr]
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.currtask} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>ADD</button>
                <ul>
                    {
                        this.state.tasks.map(function (taskobj) {
                            return (
                                <li key={taskobj.id}>
                                    <p>{taskobj.task}</p>
                                    <button onClick={() => this.handleDelete(taskobj.id)}>Delete</button>
                                </li>)
                        }.bind(this))
                    }
                </ul>
            </div>);
    }
}

export default Todo;
