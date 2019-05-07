import React, { Component } from 'react';

import headerImg from '../images/header.jpg'
import logo from '../images/UU_LOGO.png'

import CircleImage from './CircleImage'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'

import {getToolInfo} from '../helpers/database'

import '../css/moreInfo.css'


export class MoreInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            toolData: null,
            name: "ScalableLearning",
            description: "With this approach, teachers adjust the content and format of their teaching to their students current needs. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptatesut. With this approach, teachers adjust the content and format of their teaching to their students current needs. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptatesut.",
            imgURL: null,
            data: {
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
        var toolData = await getToolInfo(this.props.match.params.id);
        console.log(toolData);
        console.log(this.props.ID);
    }
    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-4 goBack">
                        <Button text="Go back" width={150} height={40}/>
                    </div>
                    <div className="col-sm-4">
                        <p className="title">{this.state.name}</p>
                    </div>
                    <div className="col-sm-12">
                        <div className="imgContainer">
                        <CircleImage width={"18vw"} height={"18vw"} imageURL={require('../images/ananas.jpg')}/>
                        </div>
                        <p className="bodyText">{this.state.description}</p>
                    </div>
                </div>
                <Footer data={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default MoreInfo;
