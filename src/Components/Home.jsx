import React from 'react';
import TodoForm from './TodoForm'
import TodosContainer from '../Containers/TodosContainer'


class Home extends React.Component {


    render() {
        return (

                <div className="user_card">
                    <img src="https://i.imgur.com/td8DG0k.jpg?1" alt="Kat" className="card_image" />

                        <div className="user_name">
                            <h1>Kat(35), NYC</h1>
                            <h2>Quarantined but uncontained adventurer. Creature of havoc.</h2>
                        </div>
                        <TodosContainer />
                        <TodoForm
                            addTodo={this.addTodo}
                        />

                    </div>

        );
    }

}

export default Home;
