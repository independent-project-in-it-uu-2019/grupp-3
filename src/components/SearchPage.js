import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/searchPage.css'

import { getCategorizedKeywords } from '../helpers/database'

const Search = () => {
    const [cost, setCost] = useState([]);
    const [edu, setEdu] = useState([]);
    const [misc, setMisc] = useState([]);
    const [plat, setPlat] = useState([]);
    const [hard, setHard] = useState([]);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const fetchData = async () => {
            var data = await getCategorizedKeywords();
            console.log(data);

            setCost(dataToOptions(data.Cost));
            setEdu(dataToOptions(data["Form of education"]));
            setMisc(dataToOptions(data.Miscellaneous));
            setPlat(dataToOptions(data.Platform));
            setHard(dataToOptions(data["Required hardware"]));
        }
        fetchData();
    }, [])

    const dataToOptions = (data) => {
        const optionsArray = [];
        data.forEach((element, i) => {
            optionsArray.push({ label: element, value: i + 1 })
        });
        return optionsArray;
    }

    return (
        <div className="entireSearch">
            <div className="container" className="dropdown">
                <div className="row">
                    <div className="col-md">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Select options={cost}
                            isMulti />
                    </div>
                    <div className="col-sm">
                        <Select options={edu}
                            isMulti />
                    </div>
                    <div className="col-sm">
                        <Select options={misc}
                            isMulti />
                    </div>
                    <div className="col-sm">
                        <Select options={plat}
                            isMulti />
                    </div>
                    <div className="col-sm">
                        <Select options={hard}
                            isMulti />
                    </div>
                </div>
                <div className="row">
                    <button type="button" />
                </div>
            </div>
        </div>
    )
}

export default Search
