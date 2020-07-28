import React from 'react';
import './App.css';
import Header from './Components/Header'
import EventsContainer from './Containers/EventsContainer'
import NavBar from './Components/NavBar'
// import UserContainer from './Containers/UserContainer'
// import TodosContainer from './Components/TodosContainer'
// import TodoForm from './Components/TodoForm'

class App extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <EventsContainer />
            </div>
        );
    }
}

export default App;

