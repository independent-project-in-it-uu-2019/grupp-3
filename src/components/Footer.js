/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';	

import { getAllProviders, getToolInfo } from '../helpers/database'

import '../css/footer.css';

export default class Footer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data: this.props.data,
          providerData: null,
      }
  }

  async componentDidMount() {
    let { type, id } = this.props;
    let providerLinks = await getAllProviders();
    console.log(this.props.id);
    for (var i in providerLinks) {
      if (providerLinks[i].ID == this.props.id) {
        this.setState({providerData: providerLinks[i]});
      }
    }

    if (type === "Tool") {
      let toolinfo = await getToolInfo(id);
      let references = toolinfo[4];
      this.setState({references: references});
    }
  }

  clickLink(link) {
      if (!link) {
          alert("No website sent as prop");
          return;
      }
      window.open(link, "_blank");
  }

  openRelated(type, id) {
    window.location.href(`/${type.toLowerCase()}/`+id);
  }

  renderProvider() {
    const { type } = this.props;
    if (!this.state.providerData || type === "Method") return;

    return (
      <div className="col-sm-4">
      <div className="FooterTitle">Website</div>
      <div className="FooterBody Link" onClick={() => this.clickLink(this.state.providerData.URL)}>
        {this.state.providerData.Name}
      </div>
      </div>
    )
  } 

  renderRelated() {
    const { type, data } = this.props;
    if (!data.related.length) {
      return;
    }
    return (
      <div className="col-sm-4">
        <div className="FooterTitle">Related {type}s</div>
        {data.related.map((related) => {
          const id = related.Tool_ID ? related.Tool_ID: related.Method_ID;
          return (
          <Link to={`/${type.toLowerCase()}/`+id} key={id} onClick={(id) => this.openRelated(type, id)}><div className="FooterBody Link">{related.Name}</div></Link>
          )
        } 
        )}
      </div>
    );
  }

  renderReferences() {
    const { references } = this.state;
    if (!references) return;

    return (
      <div className="col-sm-4">
      <div className="FooterTitle">References</div>
      {references.map((reference) => {
        return (
          <address>
              <a href={"mailto:"+reference.Email} className="FooterBody Link">{reference.Name}</a>
          </address>

        )
      })}
      </div>
      )
  }

  render() { // TODO: Render this dynamically depending on the data passed to the component
    return (
      <div className="row" style={{ marginBottom: 20 }}>
        {this.renderProvider()}
        {this.renderReferences()}
        {this.renderRelated()}
      </div>
    )
  }
}
