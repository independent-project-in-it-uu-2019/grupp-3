import React, { Component } from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'

import '../css/searchPage.css'

class DropdownExampleRemote extends Component {
    componentWillMount() {
        this.setState({
            options: [
                { key: 1, text: 'Nummer 1', value: 'Nummer 1' },
                { key: 2, text: 'Nummer 2', value: 'Nummer 2' },
                { key: 3, text: 'Nummer 3', value: 'Nummer 3' },
            ],
            options2: [
                { key: 1, text: 'SUNDAY', value: 'SUNDAY' },
                { key: 2, text: 'MONDAY', value: 'MONDAY' },
                { key: 3, text: 'TUESDAY', value: 'TUESDAY' },
            ],
            value: '',
            member: '',
            hour: '',
        })
    }

    render() {
        const {options, options2, value } = this.state

        return (
            <Grid>
                <Grid.Column width={2}>
                    <Dropdown placeholder='Cost' className={"ownDropdown"} fluid multiple selection options={options} />
                </Grid.Column>
                <Grid.Column width={2}>
                    <Dropdown placeholder='Platform' className={"ownDropdown"} fluid multiple selection options={options} />
                </Grid.Column>
                <Grid.Column width={2}>
                    <Dropdown placeholder='Hardware' className={"ownDropdown"} fluid multiple selection options={options} />
                </Grid.Column>
                <Grid.Column width={2}>
                    <Dropdown placeholder='Misc' className={"ownDropdown"} fluid multiple selection options={options} />
                </Grid.Column>
                <Grid.Column width={2}>
                    <Dropdown placeholder='Education' className={"ownDropdown"} fluid multiple selection options={options} />
                </Grid.Column>
            </Grid>
        )
    }
}

export default DropdownExampleRemote
