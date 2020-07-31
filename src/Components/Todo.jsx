import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
                <div className="todo_list">
                    <div className="todo_content">
                        <div className="todo_date">10/27/2021</div>
                        <p className="todo_item">Make costume</p>
                        <button onClick={() => this.handleCompleted(this.id)}>{this.completed ? "DONE" : "Completed?"}</button>
                    </div>
                </div>
        );
    }

}

export default Todo;
