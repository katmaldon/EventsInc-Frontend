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
                    <div className="card_title">
                        <h1>{this.props.name}</h1>
                    <Image src={this.props.image_url} alt={this.props.name} size='medium' wrapped />
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
                            <p>For additional details please visit: <a href={this.props.event_url}>{this.props.event_url}</a></p>
                        </div>
                        <br></br>
                        <div className="delete">
                            <Button className="deleteBtn" content="Delete" icon={{ color: 'red', name: 'delete' }} onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.props.handleDelete(this.props.id)}} />
                        </div>
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
