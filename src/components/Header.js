import React, { Component } from 'react'
import '../css/header.css'

export default class Header extends Component {
  constructor(props) {
      super(props);
  }  

  render() {
    return (
      <div className="row">
        <div className="HeaderContainer">
            <div className="title">N.E.F.T</div>
            <div className="subTitle">- Taking education to the next level</div>
            <div className="LogoContainer">
                <img src={this.props.logo}/>
            </div>
            <div className="ImgContainer">
                <img src={this.props.headerImg}/>
            </div>
            <div className="SubHeader">
                <p>Browse</p>
                <p>Search</p>
                <p>About this project</p>
            </div>
        </div>
    </div>
    )
  }
}
