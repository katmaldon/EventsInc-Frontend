import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class EventForm extends React.Component {
    // toggle the card front will be Add Event back will the form
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
        user_id: null //pass in user_id automatically
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
            // value: e.target.value
        });
    };
    toggleForm = () => {
        this.setState(prevState => ({ showForm: !prevState.showForm }))
    }
    renderFront = () => {
        return (
            <>
                <div className="card_title" onClick={this.toggleForm}>
                    <h3>Add New Event</h3>
                </div>
            </>
        )
    }
    // renderBack = () => {
    //     return (
    //         <section>
    //             <div className="events_form">
    //                 <form className="new_event" onSubmit={this.handleSubmit}>

    //                     <label htmlFor="name" >Name:
    //             <input
    //                             type="text"
    //                             name="name"
    //                             id="name"
    //                             value={this.state.name}
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>

    //                     <label htmlFor="name" >Type:
    //             <input
    //                             type="text"
    //                             name="event_type"
    //                             id="event_type"
    //                             value={this.state.event_type}
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>

    //                     <label htmlFor="image" >Image:
    //             <input
    //                             type="text"
    //                             name="image_url"
    //                             id="image_url"
    //                             value={this.state.image_url}
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>

    //                     <label htmlFor="name" >Date:
    //             <input
    //                             type="text"
    //                             name="date"
    //                             id="date"
    //                             value={this.state.date}
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>

    //                     <label htmlFor="name" >Time:
    //             <input
    //                             type="text"
    //                             name="time"
    //                             id="time"
    //                             value={this.state.time}
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>

    //                     <label htmlFor="name" >Location:
    //             <input
    //                             type="text"
    //                             name="location"
    //                             id="location"
    //                             value={this.state.location}
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>

    //                     <label htmlFor="name" >Price: $
    //             <input
    //                             type="text"
    //                             name="price"
    //                             id="price"
    //                             value={this.state.price}
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>

    //                     <label htmlFor="event_url" >URL:
    //             <input
    //                             type="text"
    //                             name="event_url"
    //                             id="event-url"
    //                             value={this.state.event_url}
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>


    //                     <input type="submit" value="Create event" />
    //                 </form><br></br><br></br>
    //             </div>
    //         </ section>
    //     )
    // }
    renderBack = () => {
        return (
            <>
                <div>
                    <Form className="new_event" onSubmit={this.handleSubmit}>
                        <Form.Group unstackable widths={2}>
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
                        <Button type='submit'>Submit</Button>
                        </Form.Group>
                    </Form>
            </div>
        </>
        )
    }

    // renderBack = ( ) => {
    //     return (
    //         <Form>
    //             <Form.Group unstackable widths={2}>
    //                 <Form.Input label='Name' placeholder='Name....' valueOf={this.state.name} onChange={this.handleChange}/>
    //                 <Form.Input label='Type' placeholder='event_type...' />
    //             </Form.Group>
    //             <Form.Group widths={2}>
    //                 <Form.Input label='Price' placeholder='Price....' />
    //                 <Form.Input label='Event_url' placeholder='Event_url...' />
    //             </Form.Group>
    //             <Button type='submit'>Submit</Button>
    //         </Form>
    //     )
    // }

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


