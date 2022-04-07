import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props) //initilizes parent props
    // this.handleChange = this.handleChange.bind(this);
   // this.handleChangeU = this.handleChangeU.bind(this);
    this.state = {
      Name: "",
      URL: ""
    }
  }

  handleChange = (event) => {
    this.setState({Name: event.target.value});
    /*
            TODO - Logic for changing state based on form changes
        */
  }

  handleChangeU = (event) => {
    this.setState({URL: event.target.value});
    /*
            TODO - Logic for changing state based on form changes
        */
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    this.props.onSubmit({name: this.state.Name, URL: this.state.URL})
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label>
        <input type = "text" value={this.state.Name} onChange={this.handleChange}/>
        <label>URL</label>
        <input type = "url" value={this.state.URL} onChange={this.handleChangeU}/>
        <input type = "submit"/>
      </form>
    )
  }
}

export default Form
