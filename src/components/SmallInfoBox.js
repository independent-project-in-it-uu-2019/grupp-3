import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../css/smallInfoBox.css'
import Plus from '../svg/plus.svg'

import {getKeywordsOfTool} from '../helpers/database';
import MoreInfo from './MoreInfo';

export default class SmallInfoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      keywords: [],
    }
  }

  async componentDidMount() {
    var keywords = await getKeywordsOfTool(this.props.ID);

    console.log(keywords);
    this.setState({
      keywords: keywords,
      isLoading: false,
    });
  }

  render() {
    const { ID } = this.props;
    return (
    <div className="col-6">
      <div className="boxContainer row">
        <div className="smallInfoBox d-flex flex-direction-row">
          <div className="textGroup col-12">
            <Link className="smallInfoBoxTitle" to={`/tool/${this.props.ID}`}><h2>{this.props.Title}</h2></Link>
            <div className="smallInfoBoxText">
              <p style={{width: "80%"}}>{this.props.Text}</p>
              <p>Keywords: {this.state.keywords.map((keyword, index) => {
                return (
                  <span>{index ? ",":""} {keyword}</span>
                )
              })}
              </p>
              <button type="button btn-xs" className="ReadMoreButton">
                  <Link to={`/tool/${ID}`} style={{ color: "var(--textColor, gray)" }}><p>Read More &#9654;</p></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
