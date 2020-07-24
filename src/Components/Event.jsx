import React from 'react';

class Event extends React.Component {

    // state = {}

    handleDelete = (e) => {
        fetch(`http://localhost:4000/events/${this.props.event.id}`, {
            method: "DELETE"
        })
            .then((r) => (r.json()))
            .then((deletedEvent) => {
                this.props.deleteEvent(this.props.event.id);
            });
    };



    render() {
        return (
            <div className="cards_item">
                <div className="card">
                    <div className="card_title"><h3>{this.props.event.name}</h3></div>
                    <img src={this.props.event.image_url} alt={this.props.event.name} className="card_image" />
                    <div className="event_card_content">
                        <div className="card_detail">
                            <h4>Type of event: {this.props.event.event_type}</h4>
                            <p>Date & time: {this.props.event.date}, {this.props.event.time}</p>
                            <p>Location: {this.props.event.location}</p>
                            <p>Event details: <a href={this.props.event.event_url}>{this.props.event.event_url}</a></p>
                        </div>

                        <button onClick={this.handleDelete}>Delete event</button>
                    </div>
                </div><br></br>
            </div>
        );
    }

}

export default Event;
