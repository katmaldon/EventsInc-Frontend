import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class EventForm extends React.Component {

    state = {
        showForm: false,
        name: "",
        event_type: "",
        image_url: "",
        date: "",
        time: "",
        location: "",
        price: "",
        event_url: "",
        user_id: null
    }

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
                    location: this.state.location,
                    price: this.state.price,
                    event_url: this.state.event_url,
                    user_id: this.state.user_id
                }),
            })
                .then((r) => r.json())
                .then((newEvent) => {
                    this.props.addEvent(newEvent);
                    this.setState({
                        name: "",
                        event_type: "",
                        image_url: "",
                        date: "",
                        time: "",
                        location: "",
                        price: "",
                        event_url: "",
                        user_id: null
                    })
                });
        };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    toggleForm = () => {
        this.setState(prevState => ({ showForm: !prevState.showForm }))
    }
    renderFront = () => {
        return (
            <>
                <div className="card_title" onClick={this.toggleForm}>
                    <button className="button" >Add Event</button>
                </div>
            </>
        )
    }

    renderBack = () => {
        return (
            <>
                <div>
                    <Form className="new_event" onSubmit={this.handleSubmit}>
                        <Form.Group unstackable widths={2}>
                            <select class="ui dropdown">
                            <option value="">Type of event</option>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                            </select>
                            <Form.Input
                                label="Name: "
                                name="name"
                                placeholder='Name..'
                                valueOf={this.state.value}
                                onChange={this.handleChange}
                                />

                            <Form.Input
                            label="Type: "
                            name="type"
                            placeholder='Type..'
                            valueOf={this.state.event_type}
                            onChange={this.handleChange}
                            />
                            </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input
                                label="Image: "
                                name="image_url"
                                placeholder='Image..'
                                valueOf={this.state.image_url}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                label='Date: '
                                placeholder='Date..'
                                name="date"
                                valueOf={this.state.date}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input
                                label="Time: "
                                placeholder='Time..'
                                name="time"
                                valueOf={this.state.time}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                label="Location: "
                                name="location"
                                placeholder='Location..'
                                valueOf={this.state.location}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input
                                label="Price: "
                                name="price"
                                placeholder='Price..'
                                valueOf={this.state.price}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                label="Event_url: "
                                name="event_url"
                                placeholder='Event_url...'
                                valueOf={this.state.event_url}
                                onChange={this.handleChange}
                            /><br></br>
                        <Button className="button" type='submit'>Create event</Button>
                        </Form.Group>
                    </Form>
            </div>
        </>
        )
    }

    render() {
        console.log(this.state);
        return (
            <Form.Field>
                <div className="events_form" >
                    {this.renderFront()}
                    {this.state.showForm ? this.renderBack() : null}
                </div>
            </Form.Field>

        );
    };
}

export default EventForm;


