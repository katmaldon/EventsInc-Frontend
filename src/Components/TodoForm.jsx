import React from 'react';
import { Button, Form, Dropdown } from 'semantic-ui-react'

class TodoForm extends React.Component {

    state = {
        showForm: false,
        date: "",
        item: "",
        completed: false
    }


    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/events', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                date: this.state.date,
                item: this.state.item,
                user_id: this.state.user_id
            }),
        })
            .then((r) => r.json())
            .then((newTodo) => {
                this.props.addTodo(newTodo);
                this.setState({
                    date: "",
                    item: "",
                    user_id: null
                })
            });
    };

    // handleDropdown = (e, { value }) => {
    //     this.setState({ value })
    // }

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
                    <button className="button" >Add new to-do item</button>
                </div>
            </>
        )
    };

    renderBack = () => {


        return (
            <>
                <div>
                    <Form className="new_todo" onSubmit={this.handleSubmit}>
                        <Form.Group unstackable widths={2}>

                            <Form.Input
                                label='Date: '
                                placeholder='date..'
                                name="date"
                                valueOf={this.state.date}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                label="Item: "
                                name="location"
                                placeholder='what to do...'
                                valueOf={this.state.item}
                                onChange={this.handleChange}
                            />
                            <br></br>
                            <Button className="form_button" type='submit'>Create</Button>
                        </Form.Group>
                    </Form>
                </div>
            </>
        )
    }

    render() {

        return (
            <Form.Field>
                <div className="todos_form" >
                    {this.renderFront()}
                    {this.state.showForm ? this.renderBack() : null}
                </div>
            </Form.Field>

        );
    };
}

export default TodoForm;


