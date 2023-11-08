import React from 'react';
import './App.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',email: '', password: '', country: 'india', gender: 'Male' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Form was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Username" />
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
        <select name="country" value={this.state.country} onChange={this.handleChange}>
        <option value="Select" disabled>Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>
        <input type="radio" name="gender" value="Male" checked={this.state.gender === 'Male'} onChange={this.handleChange} /> Male
        <input type="radio" name="gender" value="Female" checked={this.state.gender === 'Female'} onChange={this.handleChange} /> Female
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyForm;
