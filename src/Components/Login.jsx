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

        fetch("http://localhost:3000/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(response => {
          if (response.errors){
            alert(response.errors)
          } else {
            this.props.setUser(response)
          }
        })

      }

      render(){
        return (
          <div className="center-form">
            <form className="auth-form" onSubmit={this.handleSubmit}>
              <input name="name" value={this.state.name} onChange={this.handleChange}placeholder="name"/>
              <input name="password" value={this.state.password} type="password"  onChange={this.handleChange}placeholder="password"/>
              <button className="login" type="submit">Log In</button>
            </form>
          </div>
        )
      }

    }

    export default Login

    // state = {
    //     name: "",
    //     password: "",
    //     passwordConfirmation: ""
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name: this.state.name,
    //             password: this.state.password
    //         })
    //     }

    //     if (this.state.password === this.state.passwordConfirmation) {
    //         fetch("http:/localhost:3000/api/v1/login", options)
    //             .then(r => r.json())
    //             .then(console.log)
    //     } else {
    //         alert("Passwords need to match and are case-sensitive.")
    // }

    //     render() {
    //         return (
    //             <Segment placeholder>
    //                 <div className="login_form">
    //                     <Grid columns={2} relaxed='very' stackable>
    //                         <Grid.Column>
    //                             <Form>
    //                                 <Form.Input
    //                                     icon='user'
    //                                     iconPosition='left'
    //                                     label='Username'
    //                                     placeholder='Username'
    //                                 />
    //                                 <Form.Input
    //                                     icon='lock'
    //                                     iconPosition='left'
    //                                     label='Password'
    //                                     type='password'
    //                                     placeholder='Password'
    //                                 /><br></br>
    //                                 <Button content='Login' primary />
    //                             </Form>
    //                         </Grid.Column><br></br>
    //                         <Divider vertical>Don't have an account yet?</Divider>
    //                         <br></br>
    //                         <Grid.Column verticalAlign='middle'>
    //                             <Button content='Sign up' icon='signup' size='big' />
    //                         </Grid.Column>
    //                     </Grid>
    //                 </div>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br>
    //                 <br></br><br></br>

    //             </Segment>

    //         )
    //     }
    // }


