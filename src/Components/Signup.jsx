import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


class SignUp extends Component {

    state = {
        name: "",
        password: "",
        passwordConfirmation: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                password: this.state.password
            })
        }

        if (this.state.password === this.state.passwordConfirmation) {
            fetch("http://localhost:3000/api/v1/signup", options)
                .then(res => res.json())
                .then(response => {
                    if (response.errors) {
                        alert(response.errors)
                    }
                    else {
                        this.props.setUser(response)
                    }
                })
        }
        else {
            alert("Passwords need to match and are case-sensitive.")
        }
    }

    render() {
        return (
            <Segment placeholder>
                <div className="signup_form">
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                        <Divider vertical><h2>Ready to join the EventsInc community?</h2></Divider>
                            <Form>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Pick a name, any name...'
                                /><br></br>
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                    placeholder='Password123...NOT!'
                                /><br></br>
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Confirm password'
                                    type='password'
                                    placeholder='One more time...'
                                /><br></br>

                            <Button content='Sign up' icon='signup' size='big' />


                            </Form>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                        </Grid.Column>
                    </Grid>
                </div>
                <br></br><br></br>



            </Segment>

        )
    };
};




export default SignUp
