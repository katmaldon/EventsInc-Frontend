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

    state = {
        events: [],
        search: ''
        // user: { name: "Kat", age: 35, image_url: "https://i.imgur.com/ZuTBJfC.png", bio: "software engineer, quarantined but uncontained adventurer" },
        // hardcoded just for now
        // favorite: false

    };

    componentDidMount() {
        fetch('http://localhost:3000/events')
            .then(r => r.json())
            .then(events => {
                this.setState({ events });
            });
    };
    // returnEvents = () => {
    //     let events = this.state.events;
    //     return events;
    // };

    addEvent = (eventPOJO) => {
        let newEvents = [...this.state.events, eventPOJO];
        this.setState({
            events: newEvents,
        });
    };

    deleteEvent = id => {
        let newArr = this.state.events.filter(event => { return event.id !== id })
        this.setState({
            events: newArr
        })
    };

    searchEvents = (search) => {
        this.setState({
            search: search,
        });
    };

    filteredEvents = () => {
        let searchArr = this.state.events.filter((event) =>
            event.name.toLowerCase().includes(this.state.search.toLowerCase())
        );
        return searchArr;
    };

    // additional functions

    render() {
        return (
            <div>
                <NavBar />

                <Header />
                {/* <UserContainer
                    user={this.state.user}
                /> */}
                <Search
                    search={this.state.search}
                    searchEvents={this.searchEvents}
                    filteredEvents={this.filteredEvent}
                />
                <EventsContainer
                    events={this.state.events}
                    deleteEvent={this.deleteEvent}
                    //handleLike={this.handleLike}
                />
                <EventForm
                    addEvent={this.addEvent}
                />

            </div>
        );
    }
}

export default App;
