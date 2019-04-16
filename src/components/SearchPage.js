import React, {Component} from 'react';

export class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    openDropDown = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    };

    render() {
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={() => this.openDropDown()}>
                        Dropdown button
                    </button>
                    <div className={`dropdown-menu ${this.state.isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;
