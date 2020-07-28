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




    // state = {
    //     events: [],
    //     search: ''
    // };

    // componentDidMount() {
    //     fetch('http://localhost:3000/events')
    //         .then(r => r.json())
    //         .then(events => {
    //             this.setState({ events });
    //         });
    // };
    // addEvent = (eventPOJO) => {
    //     let newEvents = [...this.state.events, eventPOJO];
    //     this.setState({
    //         events: newEvents,
    //     });
    // };



    // searchEvents = (search) => {
    //     this.setState({
    //         search: search,
    //     });
    // };

    // filteredEvents = () => {
    //     let searchArr = this.state.events.filter((event) =>
    //         event.name.toLowerCase().includes(this.state.search.toLowerCase())
    //     );
    //     return searchArr;
    // };

    // move to EventsContainer
    // updateFavorite = id => {
    //     this.setState({
    //         events: [...this.state.events.map(e => {
    //             if (e.id === id) {
    //                 e.favorite = !e.favorite
    //                 return e
    //             }
    //             else {
    //                 return e
    //             }
    //         }
    //         )]

    //     })
    // }
    // additional functions
    // state = {
        // user: { name: "Kat", age: 35, image_url: "https://i.imgur.com/ZuTBJfC.png", bio: "software engineer, quarantined but uncontained adventurer" },
        // hardcoded just for now
        // favorite: false
    //

