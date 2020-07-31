import React from 'react';

class Todo extends React.Component {

    // make table for todos rather than cards

    render() {
        return (
            <li className="cards__item">
                <div className="card">
                    <div className="card__content">
                        <div className="card__title">{this.props.todo.date}</div>
                        <p> className="card__text">{this.props.todo.item}</p>
                    </div>
                </div>
            </li>
        );
    }

}

export default Todo;
