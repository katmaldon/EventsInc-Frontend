import React from 'react';
import { Button, Form, Dropdown } from 'semantic-ui-react'



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

    handleDropdown = (e, { value }) => {
        this.setState({ value })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleForm = (e) => {
        e.preventDefault()
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
    };

    renderBack = () => {

        const { value } = this.state;

        const eventOptions = [
            {
                key: 'Concert',
                text: 'Concert',
                value: 'Concert',
            },
            {
                key: 'Festival',
                text: 'Festival',
                value: 'Festival',
            },
            {
                key: 'Vacation',
                text: 'Vacation',
                value: 'Vacation',
            },
            {
                key: 'Comedy',
                text: 'Comedy',
                value: 'Comedy',
            },
            {
                key: 'Sports',
                text: 'Sports',
                value: 'Sports',
            },
            {
                key: 'Musical',
                text: 'Musical',
                value: 'Musical',
            },
            {
                key: 'Cult meeting',
                text: 'Cult meeting',
                value: 'Cult meeting',
            },
        ]
        return (
            <>
                <div>
                    <Form className="new_event" onSubmit={this.handleSubmit}>
                        <Form.Group unstackable widths={2}>
                            {/* <Form.Dropdown
                                name="event_type"
                                onChange={this.handleDropdown}
                                placeholder='Type of event'
                                fluid
                                selection
                                options={eventOptions}
                                value={value}
                            /> */}
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
                                placeholder='Image URL..'
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
                                label="Price:"
                                name="price"
                                placeholder='Price..'
                                valueOf={this.state.price}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                label="Website:"
                                name="event_url"
                                placeholder='url...'
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


