/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/header.css';

export default class Header extends Component {
  constructor(props) {
      super(props);
  }

  goHome() {
    document.location.href = "/";
  }

  render() {
    const { logo, headerImg } = this.props;
    return (
      <div className="row">
        <div className="HeaderContainer">
            <div className="headerTitle" onClick={this.goHome}>T.L.T</div>
            <div className="subTitle" onClick={this.goHome}>Teaching and Learning Technology</div>
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
    );
  }
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  headerImg: PropTypes.string.isRequired,
}
