import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => {
        this.setState({
          students: res.data
        })
      })
  }

  render() {
    let { students } = this.state;
    let mapped = students.map(student => {
      let { first_name, last_name, id } = student;
      return <div key={id}>
              <Link to={`/student/${id}`}><h3>{first_name} {last_name}</h3></Link>
      </div>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mapped}
      </div>
    )
  }
}