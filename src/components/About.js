import React, { Component } from 'react'
import '../css/about.css'

export default class About extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="about">
        <div className="aboutTitle">
         <h1> About this project </h1>
        </div>
        <div className="aboutText">
          Blablabla
        </div>
      </div>
    )
  }
}
