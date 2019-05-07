import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CircleImage from './CircleImage'
import PineappleIMG from '../images/ananas.jpg'
import '../css/infoBoxTech.css'

export default class SmallInfoTech extends Component {
  constructor(props) {
    super(props);
  }

  onItemClick(){
    alert("Not implemented yet!");
  }

  render() {
    return (
      <div>
        <div className="SmallInfoTech">
            <div className="col-4 test">
                <CircleImage height="80%" width="80%" imageURL={this.props.imageURL ? this.props.imageURL:PineappleIMG}/>
    </div>
            <div class="col-8">
              <div className="SmallInfoTechTitle">
                <Link to={"/method/"+this.props.ID} style={{color:"#4a4d4c"}}><h2>{this.props.Title}</h2></Link>
              </div>
              <div className="SmallInfoTechText">
                <p>{this.props.Text}</p>
              </div>
              <button type="button btn-xs" className="ReadMoreButton">
                  <Link to={"/method/"+this.props.ID} style={{color: "var(--textColor, gray)"}}><p>Read More &#9654;</p></Link>
              </button>
                <p className="seperator"/>
            </div>
          </div>
      </div>
    )
  }
}
