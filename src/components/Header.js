import React, { Component } from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import '../css/header.css'

export default class Header extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }  

  handleClick(path) {
      
  }

  render() {
    return (
      <div className="row">
        <div className="HeaderContainer">
            <div className="title">N.E.F.T</div>
            <div className="subTitle">- Taking education to the next level</div>
            <div className="LogoContainer">
                <img src={this.props.logo} alt="logo"/>
            </div>
            <div className="ImgContainer">
                <img src={this.props.headerImg} alt="headerImg"/>
            </div>
            <div className="SubHeader">
            <BrowserRouter>
                <Link to="/Browse" style={{color: "white", margin: 10}}>Browse</Link>
                <Link to="/Search" style={{color: "white", margin: 10}}>Search</Link>
                <Link to="/About" style={{color: "white", margin: 10}}>About this project</Link>
            </BrowserRouter>
            </div>
        </div>
    </div>
    )
  }
}
