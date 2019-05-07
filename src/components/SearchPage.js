import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import SmallInfoTech from './InfoBoxTech'

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

    const [selCostVal, setSelCostVal] = useState([]);
    const [selEduVal, setSelEduVal] = useState([]);
    const [selMiscVal, setSelMiscVal] = useState([]);
    const [selPlatVal, setSelPlatVal] = useState([]);
    const [selHardVal, setSelHardVal] = useState([]);
    const [selTotalVal, setSelTotalVal] = useState([]);
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
    console.log('TITTA HÄR', selTotalVal);
    const dataToOptions = (data) => {
        const optionsArray = [];
        data.forEach((element, i) => {
            optionsArray.push({ label: element, value: i + 1 })
        });
        return optionsArray;
    }

    const savedCostValue = (opt) => {
        const labelArray = [];
        opt.forEach(element => {
            labelArray.push(element.label)
        });
    
        setSelCostVal(labelArray);
    }

    const savedEduValue = (opt) => {
        const labelArray = [];
        opt.forEach(element => {
            labelArray.push(element.label)
        });
    
        setSelEduVal(labelArray);
    }

    const savedMiscValue = (opt) => {
        const labelArray = [];
        opt.forEach(element => {
            labelArray.push(element.label)
        });
    
        setSelMiscVal(labelArray);
    }

    const savedPlatValue = (opt) => {
        const labelArray = [];
        opt.forEach(element => {
            labelArray.push(element.label)
        });
    
        setSelPlatVal(labelArray);
    }

    const savedHardValue = (opt) => {
        const labelArray = [];
        opt.forEach(element => {
            labelArray.push(element.label)
        });
    
        setSelHardVal(labelArray);
    }

    /*handleOnChange(value) {
        let difference = this.state.selected.filter(x => !value.includes(x)); // calculates diff
        console.log('Removed: ', difference);                         // prints array of removed
      
        this.setState({ selected: value });
      }*/
    const filterMerge = () => {
        console.log(selCostVal, selEduVal, selHardVal, selMiscVal, selPlatVal);
        setSelTotalVal([...selCostVal, ...selEduVal, ...selHardVal, ...selMiscVal, ...selPlatVal]);
        console.log('selTotalVal', selTotalVal);
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
                                onChange={(opt) => savedCostValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={edu}
                                isMulti
                                onChange={(opt) => savedEduValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={misc}
                                isMulti
                                onChange={(opt) => savedMiscValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={plat}
                                isMulti
                                onChange={(opt) => savedPlatValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={hard}
                                isMulti
                                onChange={(opt) => savedHardValue(opt)}
                            />
                        </div>
                    </div>
                    <div className="col-md-12" align="center">
                        <button type="button" className="searchButton"
                            onClick={() => filterMerge()}
                        >Search</button>
                    </div>
                </div>
            </div>
            <div className="listwrapper">
                {
                    mockData.filter(element => selTotalVal.every(val => element.tags.some(value => value === val))).map((element, i) => {
                        return <p key={element.name}> {element.name}</p>
                    })
                    
                }
            </div>

        </div>
    )
}

export default Search
