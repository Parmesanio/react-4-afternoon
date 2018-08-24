import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './students.css';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {},
      isLoading: true
    }
    this.goBack = this.goBack.bind(this);
  }
componentDidMount() {
  axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        studentInfo: res.data,
        isLoading: false
      })
    })
}
goBack(){
  this.props.history.goBack();
}
  render() {    
    let { studentInfo, isLoading } = this.state;
    let { first_name, last_name, grade, email} = studentInfo;
    return (
      <div className="box">
        <h1>Student</h1>
        {isLoading ? 
      <span className='loader'>Loading...</span>  
       :
       null }
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Emai: {email}</h3>
        <button onClick={this.goBack}>Go Back</button>
      </div>
    )
  }
}