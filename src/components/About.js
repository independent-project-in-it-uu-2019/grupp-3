import React, { Component } from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import '../css/about.css'
import Button from './Button'

export default class About extends Component {
  constructor(props) {
      super(props);
  }
  
  goBack() {
      window.history.back();
  }

  render() {
    return (
      <div className="about">
        <div onClick={this.goBack} className="col-sm-4 goBackButton">
            <Button text="Go back" width={150} height={40}/>
        </div>
        <div className="aboutTitle">
         <h1> About this project </h1>
        </div>
        <div className="aboutText">
          <p>There are many different methods and tools to make education more diverse.
          Finding information about these methods and tools is not always easy.
          To help teachers in their education, this project is about creating a website that functions as an online catalog of tools and methods.
          </p>
          <p>The project is done by two different groups on the Master Programme in Computer and Information Engineering at Uppsala University.
          Building this website has been the two groups’ bachelor thesis.
          The first group, which work at the project the Spring in 2018, developed a database in which they stored different tools and methods.
          The second group continued the work in the Spring 2019 and developed an user friendly interface to the website.
          </p>
        </div>
      </div>
    )
  }
}
