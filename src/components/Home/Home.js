import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to='/classlist/MATH1010' className='btn'>Math 1010</Link>
        <Link to='/classlist/ENG2010' className='btn'>English 2010</Link>
        <Link to='/classlist/BIO2020' className='btn'>Biology 2020</Link>
      </div>
    );
  }
}
