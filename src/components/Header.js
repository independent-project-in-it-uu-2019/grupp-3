import React, { Component } from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import '../css/header.css'

export default class Header extends Component {
  constructor(props) {
      super(props);
  }

  goHome() {
    document.location.href = "/";
  }

  render() {
    return (
      <div className="row">
        <div className="HeaderContainer">
            <div className="headerTitle" onClick={this.goHome}>N.E.F.T</div>
            <div className="subTitle" onClick={this.goHome}>- Taking education to the next level</div>
            <div className="LogoContainer" onClick={this.goHome}>
                <img src={this.props.logo} alt="logo"/>
            </div>
            <div className="ImgContainer" onClick={this.goHome}>
                <img src={this.props.headerImg} alt="headerImg"/>
            </div>
            <div className="SubHeader">
                <Link to={"/Browse"} style={{color: "white", margin: 10}}>Browse</Link>
                <Link to={"/Search"} style={{color: "white", margin: 10}}>Search</Link>
                <Link to={"/About"} style={{color: "white", margin: 10}}>About this project</Link>
            </div>
        </div>
    </div>
    )
  }
}
