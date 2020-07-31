import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

class Login extends Component {

    state = {
        name: "",
        password: ""
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
            fetch("http://localhost:3000/api/v1/login", options)
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
                <Form className="login_form" onSubmit={this.handleSubmit}>
                    <Divider vertical><h2>Welcome back! It's showtime, baby.</h2></Divider>
                            <ul>
                            <Form.Input
                                name="name"
                                label='Username'
                                value={this.state.name}
                                placeholder='Pick a name, any name...'
                                onChange={this.handleChange}
                                placeholder="username"
                            />
                            <Form.Input
                                name="password"
                                value={this.state.password}
                                type="password"
                                onChange={this.handleChange}
                                label='Password'
                                placeholder='Password123...NOT!'
                            />
                            <Button classname="button" content='log in' primary />
                            <br></br><br></br>
                    <Divider vertical>Don't have an account yet?</Divider>
                        <Button className="button" content='Sign up' icon='signup' size='big' />
                        </ul>
            </Form>

        )
    };
};

export default Login;



    // render() {
    //     return (
    //         <div className="center-form">
    //             <form className="auth-form" onSubmit={this.handleSubmit}>
    //                 <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" />
    //                 <input name="password" value={this.state.password} type="password" onChange={this.handleChange} placeholder="password" />
    //                 <button className="login" type="submit">Log In</button>
    //             </form>
    //         </div>
    //     )
    // }
