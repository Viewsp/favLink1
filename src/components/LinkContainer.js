import React from 'react' 
import Table from './Table';
import Form from './Form';
//import './App.css';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      faveLinks: []
    }
    /* TODO - Create state object for storing favLinks */
  }

  handleRemove = (index) => {
    this.setState({faveLinks: this.state.faveLinks.filter((_, i) => i !== index)});
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  handleSubmit = (favLink) => {
    this.setState({faveLinks: this.state.faveLinks.concat(favLink)});
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
  }

  render() { // render function is needed for classBased components. Return JSX. //This keyword is needed
    return (
      <div className="container">
        <h1>My Top Favorite Links</h1>
        <p>Add a Name of url and a url Link.</p>
        <Table linkData = {this.state.faveLinks} removeLink = {this.handleRemove}/>

        <br />

        <h3>Add New URL</h3>
        <Form onSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
