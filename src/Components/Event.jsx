import React, { Component } from 'react';
import { Button, Card, Image  } from 'semantic-ui-react'

class Event extends Component   {
    state = { showDetails: false }

    toggleDetails = () => {
        this.setState(prevState => ({showDetails: !prevState.showDetails}))
    }

    renderFront = () => {
        return (
            <>
                <Card >
                    <Image src={this.props.image_url} alt={this.props.name} size='small' wrapped />
                    <div className="card_title">
                        <h3>{this.props.name}</h3>
                        <p onClick={() => this.props.handleLike(this.props.id)}>{this.props.favorite ? "💚" : "♡"}</p>
                        <Button content="Show Details" icon={{ color: 'red', name: 'delete' }} onClick={this.toggleDetails}/>
                    </div>
                </Card>
            </>
        )
    }
    renderBack = () => {
        return (
            <>
                <Card onClick={this.toggleDetails}>
                    <div className="event_card_content">
                        <div className="card_detail">
                            <h4>Type of event: {this.props.event_type}</h4>
                            <p>Date & time: {this.props.date}, {this.props.time}</p>
                            <p>Location: {this.props.location} </p>
                            <p>Price: ${this.props.price} </p>
                            <p>Event details: <a href={this.props.event_url}>{this.props.event_url}</a></p>
                        </div>
                        {/* <Button color='red' onClick={() => this.props.handleDelete(this.props.id)} >Delete event</Button> */}
                            <Button content="Delete" icon={{ color: 'red', name: 'delete' }} onClick={() => this.props.handleDelete(this.props.id)} />

                        {/* <button onClick={() => this.props.handleDelete(this.props.id)}>Delete event</button> */}
                    </div>
                </Card>
            </>
        )
    }
    render () {
        return (
            <>
                <div >
                    {/* {this.renderFront()} */}
                    { this.state.showDetails ? this.renderBack() : this.renderFront() }
                </div>
            </>
        );
    }
}
export default Event;


            // <div className="cards_item">
            //     <div className="card">
            //         <div className="card_title"><h3>{this.props.name}</h3></div>
            //         <img src={this.props.image_url} alt={this.props.name} className="card_image" />
            //     </div>
            //     <br></br>
            // </div>
