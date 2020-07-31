
import React from 'react';
import Todo from '../Components/Todo'
import TodoForm from '../Components/TodoForm'

const TodosContainer = (props) => {
    let todosArr = props.todos.map((todo) => {
        return (
            <Todo
                key={todo.id}
                todo={todo}
            />
        );
    });

    return (
        <ul className="todo_cards">
            {todosArr}
        </ul>
    );
};

// render todos into list/table with dates and checkbox rather than on card

export default TodosContainer;
