import React, { Component } from 'react';

export default class Admin extends Component {
    render() {
        return (
            <div>
            <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Long desc:
                        <input type="text" name="longdesc" />
                    </label>
                    <label>
                        Short desc:
                        <input type="text" name="shortdesc" />
                    </label>

            </form>
            </div>
        );
    }
}
