import React, { Component } from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/searchPage.css'

const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];

const Search = () => (
    <div className="entireSearch">
        <div className="container" className="dropdown">
            <div className="row">
                <div className="col-sm">
                    <Select options={techCompanies}
                        isMulti />
                </div>
                <div className="col-sm">
                    <Select options={techCompanies}
                        isMulti />
                </div>
                <div className="col-sm">
                    <Select options={techCompanies}
                        isMulti />
                </div>
                <div className="col-sm">
                    <Select options={techCompanies}
                        isMulti />
                </div>
                <div className="col-sm">
                    <Select options={techCompanies}
                        isMulti />
                </div>
            </div>
        </div>
    </div>
);

export default Search
