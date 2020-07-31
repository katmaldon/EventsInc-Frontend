import React from 'react'

class Signup extends React.Component {

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

    if (this.state.password === this.state.passwordConfirmation){
      fetch("http://localhost:3000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({name: this.state.name, password: this.state.password})
      })
      .then(res => res.json())
      .then(response => {
        if(response.errors){
          alert(response.errors)
        } else {
          this.props.setUser(response)
        }
      })
    } else {
      alert("Passwords must match. Please try again.")
    }

  }

  render(){
    return (
      <div className="center-form">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="name" value={this.state.name} onChange={this.handleChange}placeholder="name"/>
          <input name="password" value={this.state.password} type="password"  onChange={this.handleChange}placeholder="password"/>
          <input name="passwordConfirmation" value={this.state.passwordConfirmation} type="password"  onChange={this.handleChange}placeholder="confirm password"/>
          <button className="login" type="submit">Sign up</button>
        </form>
      </div>
    )
  }

}

export default Signup;
