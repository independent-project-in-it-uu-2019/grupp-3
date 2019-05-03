import React, { Component } from 'react'
import '../css/smallInfoBox.css'
import Plus from '../svg/plus.svg'

import Button from './Button'

export default class SmallInfoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    }

    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.handleReadMore = this.handleReadMore.bind(this);
  }

  toggleExpansion() {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  handleReadMore(title) {
    console.log("Clicked read more");
    //Navigate user to landing page of item
  }

  render() {
    return (
    <div className="col-6">
    <div className="boxContainer row" style={{maxHeight: this.state.isExpanded ? 500: null}}>
    <div className="smallInfoBox d-flex flex-row">
          <div className="textGroup headerDivider col-9" style={{maxHeight: this.state.isExpanded ? 500: null}}>
            <div onClick={() => this.handleReadMore(this.props.Title)} className="smallInfoBoxTitle">
              <h2>{this.props.Title}</h2>
            </div>
            <div className="smallInfoBoxText">
              <p style={{width: "80%"}}>{this.props.Text}</p>
              <p className="readMore" onClick={() => this.handleReadMore(this.props.Title)}>Read More</p>
            </div>
          </div>
          <div id="rotate" onClick={this.toggleExpansion} className="plusContainer col-3"
                style={{transform: this.state.isExpanded ? "rotate(45deg)":"rotate(0)"}}>
            <img src={Plus} style={{height: "90%", width: "90%", alignSelf: "center"}}/>
          </div>
    </div>
    </div>
    </div>
    )
  }
}

//              <img onClick={this.onItemClick} src={Plus} style={{height: "80%", width: "80%"}}/>

