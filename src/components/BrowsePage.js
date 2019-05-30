import React, { Component } from 'react';
import SmallInfoBox from './SmallInfoBox';
import SmallInfoTech from './InfoBoxTech';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MoreInfo from './MoreInfo';

import {getAllMethods, getAllTools} from '../helpers/database'

const titleStyle = {fontSize: 40,
                    marginTop:20,
                    fontFamily:"muliExtraBold",
                    textAlign:"center",
                    color: "#494949"    
                };
export default class BrowsePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: null,
            methods: null,
            isLoading: true,
        }
    }

    async componentDidMount() {
        var methods = await getAllMethods();
        var tools = await getAllTools();



        this.setState({
            tools: tools,
            methods: methods,
            isLoading: false,
        });


        console.log("METHODS");
        console.log(methods);

        console.log("TOOLS");
        console.log(tools);
    }

    render() {
        const {tools, methods} = this.state;
        const { match } = this.props;

        if(this.state.isLoading) {
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
        }

        return (
        <div>
            <div className="row" style={{paddingLeft: 50, paddingRight: 50}}>
                <div className="col-6">
                <h2 style={titleStyle}>Tools</h2>
                    {tools.map(tool => 
                        <SmallInfoBox Title={tool.Name} Text={tool.Short_description} ID={tool.ID} match={match}/>
                        )}
                </div>
                <div className="col-6 align-self-center">
                <h2 style={titleStyle}>Methods</h2>
                    {methods.map(method => 
                        <SmallInfoTech Title={method.Name} Text={method.Short_description} imageURL={method.Image_URL} ID={method.ID} match={match}/>
                        )}
                </div>
            </div>
            <Route path={`${match.path}/tool/:id`} component={MoreInfo}></Route>
        </div>
        )
    }
}
