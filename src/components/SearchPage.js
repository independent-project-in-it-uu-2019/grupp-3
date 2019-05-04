import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import SmallInfoTech from './infoBoxTech'

import '../css/searchPage.css'

import { getCategorizedKeywords } from '../helpers/database'

const mockData = [
    {
        name: "Tech1",
        tags: ["Free", "University", "Upper secondary school", "Website", "OSX", "Projector", "Computer"],
    },
    {
        name: "Tech2",
        tags: ["Free", "University", "Upper secondary school", "Offline", "OSX", "Android", "Whiteboard"],
    },
    {
        name: "Tech3",
        tags: ["Free (students)", "Kindergarden", "Secondary school", "Offline", "Ubunutu", "OSX", "Clickers", "Computer"],
    },
    {
        name: "Tech4",
        tags: ["Free (students)", "University", "Upper secondary school", "Website", "Offline", "Windows", "Smartphone", "Computer"],
    },
    {
        name: "Tech5",
        tags: ["Free"],
    },
]

const Search = () => {
    const [cost, setCost] = useState([]);
    const [edu, setEdu] = useState([]);
    const [misc, setMisc] = useState([]);
    const [plat, setPlat] = useState([]);
    const [hard, setHard] = useState([]);

    const [selVal, setSelVal] = useState([]);
    console.log(selVal);
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

    const savedValue = (opt) => {
        opt.forEach(element => {
            setSelVal([...selVal, element.label])
        });
    }

    return (
        <div className="container" className="page">
            <div className="entireSearch">
                <div className="container" className="dropdown">
                    <div className="row">
                        <div className="col-md-12" align="center" className="search">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Select options={cost}
                                isMulti
                                onChange={(opt) => console.log(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={edu}
                                isMulti
                                onChange={(opt) => savedValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={misc}
                                isMulti
                                onChange={(opt) => savedValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={plat}
                                isMulti
                                onChange={(opt) => savedValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={hard}
                                isMulti
                                onChange={(opt) => savedValue(opt)}
                            />
                        </div>
                    </div>
                    <div className="col-md-12" align="center">
                        <button type="button" className="searchButton">Search</button>
                    </div>
                </div>
            </div>
            <div className="listwrapper">
                {
                    mockData.filter(element => element.tags.some(tag => selVal.some(selectedValue => selectedValue === tag))).map((element, i) => {
                        return <p> {element.name}</p>
                    })
                }
            </div>

        </div>
    )
}

export default Search
