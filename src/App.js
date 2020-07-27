import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
// import UserContainer from './Containers/UserContainer'
import EventsContainer from './Containers/EventsContainer'
import EventForm from './Components/EventForm'
import Search from './Components/Search'
import NavBar from './Components/NavBar'
//import TodosContainer from './Components/TodosContainer'
// import TodoForm from './Components/TodoForm'

class App extends React.Component {

    // state = {
        // user: { name: "Kat", age: 35, image_url: "https://i.imgur.com/ZuTBJfC.png", bio: "software engineer, quarantined but uncontained adventurer" },
        // hardcoded just for now
        // favorite: false
    //}




    // returnEvents = () => {
    //     let events = this.state.events;
    //     return events;
    // };



    // additional functions

    render() {
        return (
            <div>
                <NavBar />

                <Header />
                {/* <UserContainer
                    user={this.state.user}
                /> */}

                <EventsContainer
                    // events={this.state.events}
                    // deleteEvent={this.deleteEvent}
                    //handleLike={this.handleLike}
                />


            </div>
        );
    }
}

export default App;
