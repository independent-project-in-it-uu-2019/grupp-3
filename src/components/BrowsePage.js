import React, { Component } from 'react';
import Header from './Header'
import SmallInfoBox from './smallInfoBox'
import SmallInfoTech from './infoBoxTech'

import headerImg from '../images/header.jpg'
import logo from '../images/UU_LOGO.png'

import {getAllMethods, getAllTools} from '../helpers/database'

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

        if(this.state.isLoading) {
            return(
                <div>
                    <Header headerImg={headerImg} logo={logo}/>
                    <p>Loading...</p>
                </div>
            )
        }

        return (
        <div>
            <Header headerImg={headerImg} logo={logo}/>
            <div className="row">
                <div className="col-6">
                    {tools.map(tool => 
                        <SmallInfoBox Title={tool.Name} Text={tool.Description}/>
                        )}
                </div>
                <div className="col-6">
                        {methods.map(method => 
                            <SmallInfoTech Title={method.Name} Text={method.Description} imageURL={method.Image_URL}/>
                            )}
                </div>
            </div>
        </div>
        )
    }
}
