import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
                <div className="todo_list">
                    <div className="todo_content">
                        <div>10/27/2020: Make costume...
                        <button onClick={() => this.handleCompleted(this.id)}>{this.completed ? "DONE" : "done?"}</button></div><br></br>
                        <div>12/10/2021: Christmas shopping with the parents...
                        <button onClick={() => this.handleCompleted(this.id)}>{this.completed ? "DONE" : "done?"}  </button></div><br></br>
                        <div>04/20/2021: Book flights to Rome...
                        <button onClick={() => this.handleCompleted(this.id)}>{this.completed ? "DONE" : "done?"}</button></div><br></br>
                    </div>
                </div>
        );
    }

}

export default Todo;
