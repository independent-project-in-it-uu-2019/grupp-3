/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/header.css';

export default class Header extends Component {
  static goHome() {
    document.location.href = '/';
  }

  render() {
    const { logo, headerImg } = this.props;
    return (
      <div className="row">
        <div className="HeaderContainer">
          <div className="headerTitle" role="presentation" onClick={Header.goHome} onKeyUp={() => console.log('Key released')}>N.E.F.T</div>
          <div className="subTitle" role="presentation" onClick={Header.goHome} onKeyUp={() => console.log('Key released')}>- Taking education to the next level</div>
          <div className="LogoContainer" role="presentation" onClick={Header.goHome} onKeyUp={() => console.log('Key released')}>
            <img src={logo} alt="logo" />
          </div>
          <div className="ImgContainer" role="presentation" onClick={Header.goHome} onKeyUp={() => console.log('Key released')}>
            <img src={headerImg} alt="headerImg" />
          </div>
          <div className="SubHeader">
            <Link to="/Browse" style={{ color: 'white', margin: 10 }}>Browse</Link>
            <Link to="/Search" style={{ color: 'white', margin: 10 }}>Search</Link>
            <Link to="/About" style={{ color: 'white', margin: 10 }}>About this project</Link>
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
