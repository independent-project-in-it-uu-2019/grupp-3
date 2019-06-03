import React, { Component } from 'react';

export default class Admin extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    </div>
                    <div>
                    <label>
                        Long desc:
                        <input type="text" name="longdesc" />
                    </label>
                    </div>
                    <div>
                    <label>
                        Short desc:
                        <input type="text" name="shortdesc" />
                    </label>
                    </div>
                    <div>
                    <label>
                        Reference P:
                        <input type="text" name="keywords" />
                    </label>
                    </div>
                    <div>
                        Free:
                        <input type="checkbox" name="free"/>
                        Free (students):
                        <input type="checkbox" name="freestud"/>
                        Registration Required:
                        <input type="checkbox" name="regreq"/>
                        Offline:
                        <input type="checkbox" name="offline"/>
                        Website:
                        <input type="checkbox" name="website"/>
                        SmartPhone:
                        <input type="checkbox" name="smartphone"/>
                        Linux:
                        <input type="checkbox" name="linux"/>
                        Windows:
                        <input type="checkbox" name="windows"/>
                        Projektor:
                        <input type="checkbox" name="projektor"/>
                        Whiteboard:
                        <input type="checkbox" name="whiteboard"/>
                        Clickers:
                        <input type="checkbox" name="clickers"/>

                    </div>

                </form>
            </div>
        );
    }
}
