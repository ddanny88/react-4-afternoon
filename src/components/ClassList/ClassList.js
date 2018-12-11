import React, { Component } from 'react';
import axios from 'axios';
import { strict, strictEqual } from 'assert';
import { Link }from 'react-router-dom';



export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then((response)=>{
      this.setState({ students: response.data})
    })
  }


  render() {
    const students = this.state.students.map((stu, i)=>(
      <Link to={`/student/${stu.id}`} ><h3 key={i}>{stu.first_name}{stu.last_name}</h3></Link>
    ))

    return (
      <div className="box">
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList:</h2>
        { students }
      </div>
    )
  }
}