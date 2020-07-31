import React from 'react';
import TodoForm from './TodoForm'
import TodosContainer from '../Containers/TodosContainer'


class Home extends React.Component {


    render() {
        return (
            <li className="user_card">
                <div className="user_card">
                    <img src="https://i.imgur.com/td8DG0k.jpg?1" alt="Kat" className="card_image" />
                    <div className="card_content">
                        <div className="user_name">
                            <h1>Kat (35)</h1>
                        </div>
                        <div className="user_card_detail">
                            <h2>Brooklyn, NY</h2>
                            <h3>Quarantined but uncontained adventurer. Creature of havoc. Jack of all trades, master of some.</h3>
                        </div>
                        <TodosContainer />
                        <TodoForm
                            addTodo={this.addTodo}
                        />

                    </div>
                </div>
            </li>

        );
    }

}

export default Home;
