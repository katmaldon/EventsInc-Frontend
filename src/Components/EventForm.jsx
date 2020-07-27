import React from 'react';

class EventForm extends React.Component {

    state = {
        name: "",
        event_type: "",
        image_url: "",
        date: "",
        time: "",
        event_url: "",
        user_id: null //pass in user_id automatically
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {

        e.preventDefault();
        fetch('http://localhost:3000/events', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                event_type: this.state.event_type,
                image_url: this.state.image_url,
                date: this.state.date,
                time: this.state.time,
                event_url: this.state.event_url,
                user_id: this.state.user_id
            }),
        })
            .then((r) => r.json())
            .then((newEvent) => {
                this.props.addEvent(newEvent);
            });
    };


    render() {
        return (
            <section>
                <div className="events_form">
                    <h3>Add new event</h3><br></br><br></br>
                    <form className="new_event" onSubmit={this.handleSubmit}>

                        <label htmlFor="name" >Name:
                <input
                                type="text"
                                name="name"
                                id="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label htmlFor="name" >Type:
                <input
                                type="text"
                                name="event_type"
                                id="event_type"
                                value={this.state.event_type}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label htmlFor="image" >Image:
                <input
                                type="text"
                                name="image_url"
                                id="image_url"
                                value={this.state.image_url}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label htmlFor="name" >Date:
                <input
                                type="text"
                                name="date"
                                id="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label htmlFor="name" >Time:
                <input
                                type="text"
                                name="time"
                                id="time"
                                value={this.state.time}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label htmlFor="event_url" >URL:
                <input
                                type="text"
                                name="event_url"
                                id="event-url"
                                value={this.state.event_url}
                                onChange={this.handleChange}
                            />
                        </label>


                        <input type="submit" value="Create event" />
                    </form><br></br><br></br>
                </div>
            </section>

        );
    };
}

export default EventForm;

