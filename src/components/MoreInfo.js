import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CircleImage from './CircleImage';
import Footer from './Footer';
import Button from './Button';

import { getToolInfo, getMethodInfo, getMethodsByToolID, getToolsByMethodID } from '../helpers/database';

import '../css/moreInfo.css';


export default class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      footerData: {
        website: 'https://www.scalable-learning.com/',
        licenseInfo: '',
        about: '',
        references: '',
        empha: '',
        related: '',
      },

    };
  }

  async componentDidMount() {
    console.log('ID');
    console.log(this.props.type);
    const { match } = this.props;
    const { id } = this.props.match.params;
    if (match.url.includes('tool')) {
      console.log("Fetching tool data");
      const toolData = await getToolInfo(id);
      const relatedMethodData = await getMethodsByToolID(id);
      this.setState({
        data: toolData[0],
        isLoading: false,
      });
    } else if (match.url.includes('method')) {
      console.log("Fetching method data");
      const methodData = await getMethodInfo(id);
      const relatedToolData = await getToolsByMethodID(id);
      this.setState({
        data: methodData[0],
        isLoading: false,
      });
    }
    console.log(this.state.data[0]);
  }

  goBack() {
    window.history.back();
  }

  render() {
    const { match } = this.props;
    if (this.state.isLoading) {
      return (
              <div>
                  <p>Loading...</p>
                </div>
      );
    }
    return (
       <div>
        <div className="container">
          <div className="row">
            <div onClick={this.goBack} className="col-sm-4 goBack">
              <Button text="Go back" width={150} height={40} />
            </div>
            <div className="col-sm-4">
              <p className="title">{this.state.data[0].Name}</p>
            </div>
            <div className="col-sm-12">
              <div className="imgContainer">
                <CircleImage
                  width="18vw"
                  height="18vw"
                  imageURL={this.state.data[0].Image_URL ? this.state.data[0].Image_URL : require('../images/ananas.jpg')}
                />
              </div>
              <p className="bodyText">{this.state.data[0].Description}</p>
            </div>
          </div>
          <Footer data={this.state.footerData} type={this.state.type}/>
          <Route path={`${match.path}/:id`} exact component={MoreInfo}></Route>
        </div>
      </div>
    );
  }
}
