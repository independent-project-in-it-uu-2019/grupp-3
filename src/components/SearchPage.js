import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import SmallInfoBox from './SmallInfoBox';
import BrowsePage from './BrowsePage'

import '../css/searchPage.css';

import { getCategorizedKeywords, getAllMethods } from '../helpers/database';
import { getAllTools } from '../helpers/database';


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
    const [searchValue, setSearchValue] = useState([]);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const fetchData = async () => {
            var data = await getCategorizedKeywords();
            var tools = await getAllTools();
            var methods = await getAllMethods();
            filterMerge(tools, methods);
            console.log(data);

            setCost(dataToOptions(data.Cost));
            setEdu(dataToOptions(data["Form of education"]));
            setMisc(dataToOptions(data.Miscellaneous));
            setPlat(dataToOptions(data.Platform));
            setHard(dataToOptions(data["Required hardware"]));
        }
        fetchData();
    }, [])
    //console.log('TITTA HÄR', selTotalVal);
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
       // console.log(selCostVal, selEduVal, selHardVal, selMiscVal, selPlatVal);
        setSelTotalVal([...selCostVal, ...selEduVal, ...selHardVal, ...selMiscVal, ...selPlatVal]);
        //console.log('selTotalVal', selTotalVal);
    }

    const filter = (filter, methods) => {
        for (let i in filter) {

        }
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="container" className="page">
            <div className="entireSearch">
                <div className="container" className="dropdown">
                    <div className="row">
                        <div className="col-md-12 align-items-center" className="search">
                            <input onChange={handleChange} type="text" aria-label="Search..." placeholder="Search..." className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Select options={cost}
                                placeholder={"Cost"}
                                isMulti
                                onChange={(opt) => savedCostValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={edu}
                                placeholder={"Education"}
                                isMulti
                                onChange={(opt) => savedEduValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={misc}
                                placeholder={"Misc"}
                                isMulti
                                onChange={(opt) => savedMiscValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={plat}
                                placeholder={"Platform"}
                                isMulti
                                onChange={(opt) => savedPlatValue(opt)}
                            />
                        </div>
                        <div className="col-sm">
                            <Select options={hard}
                                placeholder={"Hardware"}
                                isMulti
                                onChange={(opt) => savedHardValue(opt)}
                            />
                        </div>
                    </div>
                    <div className="col-md-12" align="center">
                        <button type="button" className="searchButton"
                            onClick={() => filterMerge()}
                        >Apply</button>
                    </div>
                </div>
            </div>
            <div className="listwrapper">
                {
                    /*mockData.filter(element => selTotalVal.every(val => element.tags.some(value => value === val))).map((element, i) => {
                        return <SmallInfoBox key={element.name} Title={element.name} Text={element.desc} ID={element.ID}/>
                    } */
                }
                <BrowsePage selTotalVal={selTotalVal}/>
            </div>
        </div>
    )
}

export default Search
