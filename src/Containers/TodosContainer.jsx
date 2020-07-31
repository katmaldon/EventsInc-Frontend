
import React from 'react';
import Todo from '../Components/Todo'
import TodoForm from '../Components/TodoForm'

class TodosContainer extends React.Component {

    state = {
        todos: []
    }

    fetchTodos = () => {
        fetch('http://localhost:3000/todos')
            .then(r => r.json())
            .then(todos => {
                this.setState({ todos });
            });
    };

    componentDidMount() {
        this.fetchTodos()
    };

    addTodo = (todo) => {
        let newTodos = [...this.state.todos, todo];
        this.setState({
            todos: newTodos,
        });
    };

    deleteTodo = id => {
        let newArr = this.state.todos.filter(event => { return event.id !== id })
        this.setState({
            todos: newArr
        })
    };

    handleDelete = (id) => {
        const options = {
            method: "DELETE"
        }
        fetch(`http://localhost:3000/todos/${id}`, options)
            .then(r => r.json())
            .then(this.fetchTodos)
    };

    completeTodo = (id) => {
        let updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                return (todo)
            }
            else { return todo }
        })
        this.setState({
            todos: updatedTodos
        })
    }


    handleCompleted = (id) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                completed: !this.props.completed
            })
        }

        fetch(`http://localhost:3000/todos/${id}`, options)
            .then(res => res.json())
            .then(e => {
                this.completeTodo(id)
            })
    };


    render() {

        return (
            <div>

                <Todo/>
                <TodoForm
                    addTodo={this.addTodo}
                />
            </div>
        );
    };
};


export default TodosContainer;
