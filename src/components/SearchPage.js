import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import SmallInfoBox from './SmallInfoBox'

import '../css/searchPage.css'

import { getCategorizedKeywords } from '../helpers/database'

const mockData = [
    {
        name: "Camtasia",
        desc: "Camtasia empowers you to make amazing videosÂ—even if youÂ’ve never made one before. Record a video of your screen or bring in your own video footage. Then, use CamtasiaÂ’s drag-and-drop editor to easily create remarkable videos you can share with anyone. Keep your audience engaged by adding eye-catching animations, music, and captions in record time. With Camtasia, youÂ’ll be able to produce stunning videos without being a professional video editor.",
        tags: ["Free", "Free (students)", "University", "Video camera", "Computer", "OSX"],
        ID: 7
    },
    {
        name: "Clickers",
        desc: "With this approach, teachers adjust the content and format of their teaching according to their studentsÂ’ current needs. There are a number of ways of achieving this. Assess student progress and understanding with preparatory assignments: students are assigned preparatory work to be completed and submitted before class. This can be online quizzes, interactive quizzes in an screencast or other online video where statistics about their responses and time spent watching are logged (e.g. via a flipped-classroom platform such as Scalable Learning), or some other assignment. The teacher then looks at the results of these assignments and changes the content and amount of detail to be dealt with during class, either skipping sections where students have already mastered the concepts, and/or spending more time on material that students found difficult. In-class student response systems: during class, the teacher can ask conceptual questions about the material using a student response system such as mentometers/clickers. Depending on the student responses, the teacher adjusts their instruction accordingly, and possible also gauge understanding with more questions. Muddiest point: teachers ask to pause at the end of the class and reflect on what they found to be the most difficult with the material covered. Students are then asked to leave anonymous written comments before leaving, which the teacher can then use to prepare for the next class and make necessary adjustments. \n Pedagogical advantages \n This approach allows the teacher to gain insight into how well students understand the concepts and course material and to become more responsive to studentsÂ’ learning needs. Also, where students are required to complete assignments, they actively engage and work with the material in a more continuous fashion during the course. Asking students to reflect upon what they find most difficult, they are prompted to engage in metacognitive reflections about their learning, and helps them to identify areas where they need more work and help.",
        tags: ["University", "Requires hardware"],
        ID: 9
    },
    {
        name: "Screencasting",
        desc: "Screencasting allows you to record your computer screen and also record your voice and cursor movements at the same time. This can be used to record, for example, lectures and instructional videos that can be uploaded online for student to use whenever they like. \n Technical information \n Costs: there is a variety of screencasting software, both free and paid. \n Availability: there is currently no university-wide licensing available. Software programs can be downloaded directly from the internet, and not physical hardware (other than a computer with/connected to a microphone) is required, either for instructors or students. \n Online/offline: Videos can be created offline, but to internet connections are required to upload and download the videos produced. \n Mobile device compatibility: Generally a desktop computer is required to create screencast videos. The videos created can be viewed on mobile devices (but depends on the chosen format of the video file produced). \n Operating systems: Depends on the software. Generally available for either Windows, Mac OS, or both. \n Pedagogical information: \n Areas of usage: \n Screencasted videos are useful for complementing or replacing classroom teaching. For example, short lecture-style videos can be made to give a Powerpoint presentation as in the classroom. These short recorded lectures could replace in-class lectures, with students watching these at home before coming to class as a way to prepare for in-class instruction and discussions. This is a way to free up class time to allow more in-depth exposition and discussions of the material, classroom discussions, problem solving etc. Sometimes referred to as a Â“flipped classroomÂ” approach. Instructors can also create videos that help students revise assumed prior knowledge that is required for understanding course material dealt with during class time. They can also be made to record specific parts of material covered during lectures (e.g. topics that students commonly have difficulty with) so that they can re-watch at their own pace and as many times as they need. They can also be used as instructional videos to help students prepare for practical work, either for presenting background theory, and/or explain specific aspects of the practical work. \n Screencasting can also be used as a way to give students audio-visual feedback on their submitted work. By displaying the studentÂ’s work on screen while recording the screencast, the teacher can give oral feedback while specifically pointing out different parts of the submitted work. This can be a way to give more direct and detailed feedback than written feedback. This could also be used for students to give each other feedback, or to produce videos of their own as part of their assessment. \n Class size: Videos can be viewed by students in classes of any size. If interactivity is built in (e.g. quizzes), one needs to consider how students receive feedback on these. These could be automatic, built-in feedback, but it could also involve teachers reviewing the student answers and giving personalized feedback. If student responses are gathered in this way (e.g. via flipped classroom platforms such as Scalable Learning), it can also facilitate the use of Just-in-Time teaching methodology where teachers adapt their upcoming classes depending on student needs.",
        tags: ["University", "Windows"],
        ID: 3,
    },
    {
        name: "Active Presenter",
        desc: "A short description",
        tags: ["Free", "Free (students)", "University", "Requires hardware", "Windows", "OSX"],
        ID: 1,
    }
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
                        </div >
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
            <div className="listwrapper" align="center">
                {
                    mockData.filter(element => selTotalVal.every(val => element.tags.some(value => value === val))).map((element, i) => {
                        return <SmallInfoBox key={element.name} Title={element.name} Text={element.desc} ID={element.ID}/>
                    })
                    
                }
            </div>

        </div>
    )
}

export default Search
