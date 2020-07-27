import React from 'react';
import './App.css';
import Header from './Components/Header'
import EventsContainer from './Containers/EventsContainer'
import NavBar from './Components/NavBar'
// import UserContainer from './Containers/UserContainer'
// import TodosContainer from './Components/TodosContainer'
// import TodoForm from './Components/TodoForm'

class App extends React.Component {

    // state = {
        // user: { name: "Kat", age: 35, image_url: "https://i.imgur.com/ZuTBJfC.png", bio: "software engineer, quarantined but uncontained adventurer" },
        // hardcoded just for now
        // favorite: false
    //

    render() {
        return (
            <div>
                <NavBar />
                <Header />
                {/* <UserContainer
                    user={this.state.user}
                /> */}
                <EventsContainer />
            </div>
        );
    }
}

export default App;
