import React, { Component } from 'react';

import headerImg from '../images/header.jpg'
import logo from '../images/UU_LOGO.png'

import CircleImage from './CircleImage'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'

import {getToolInfo, getMethodInfo} from '../helpers/database'

import '../css/moreInfo.css'


export class MoreInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            toolData: null,
            methodData: null,
            name: "ScalableLearning",
            description: "With this approach, teachers adjust the content and format of their teaching to their students current needs. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptatesut. With this approach, teachers adjust the content and format of their teaching to their students current needs. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptatesut.",
            imgURL: null,
            footerData: {
                website: "https://www.scalable-learning.com/",
                licenseInfo: "",
                about: "",
                references: "",
                empha: "",
                related: "",
            }

        }
    }

    async componentDidMount() {
        console.log("ID");
        console.log(this.props.match.params.id);
        console.log(this.props.match.params.type);
        var type = this.props.match.params.type;
        if (type == "tool") {
            var toolData = await getToolInfo(this.props.match.params.id);
            this.setState({
                data: toolData[0],
                isLoading: false,
            });
        } else if(type == "method") {
            var methodData = await getMethodInfo(this.props.match.params.id);
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
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                <div className="row">
                    <div onClick={this.goBack} className="col-sm-4 goBack">
                        <Button text="Go back" width={150} height={40}/>
                    </div>
                    <div className="col-sm-4">
                        <p className="title">{this.state.data[0].Name}</p>
                    </div>
                    <div className="col-sm-12">
                        <div className="imgContainer">
                        <CircleImage width={"18vw"} height={"18vw"} 
                        imageURL={this.state.data[0].Image_URL ? this.state.data[0].Image_URL:require('../images/ananas.jpg')}/>
                        </div>
                        <p className="bodyText">{this.state.data[0].Description}</p>
                    </div>
                </div>
                <Footer data={this.state.footerData}/>
                </div>
            </div>
        );
    }
}

export default MoreInfo;
