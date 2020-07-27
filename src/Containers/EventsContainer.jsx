import React, { Component } from 'react';
import Event from '../Components/Event';
import Search from '../Components/Search';
import EventForm from '../Components/EventForm';


class EventsContainer extends Component {

    state = {
        events: [],
        search: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/events')
            .then(r => r.json())
            .then(events => {
                this.setState({ events });
            });
    };

    addEvent = (eventPOJO) => {
        let newEvents = [...this.state.events, eventPOJO];
        this.setState({
            events: newEvents,
        });
    };

    handleDelete = id => {
        let newArr = this.state.events.filter(event => { return event.id !== id })
        this.setState({
            events: newArr
        })
    };

    handleSearch = (search) => {
        this.setState({ search: search })
    };

    // filteredEvents = () => {
    //     let searchArr = this.state.events.filter((event) =>
    //         event.name.toLowerCase().includes(this.state.search.toLowerCase())
    //     );
    //     return searchArr;
    // };


    render() {
        const filteredEvents = this.state.events.filter(event => event.name.toLowerCase().includes(this.state.search.toLowerCase()))
            return(
                <section>
                <div><Search handleSearch={this.handleSearch} /></div>
                <div className="event_cards">
                    {events.map(eventPOJO => <Event key={eventPOJO.id} {...eventPOJO} deleteEvent={this.deleteEvent} likeEvent={this.handleLike} />)}
                </div>

                <div><EventForm addEvent={this.addEvent}/></div>
                </section>



        );
    };
};

export default EventsContainer;
