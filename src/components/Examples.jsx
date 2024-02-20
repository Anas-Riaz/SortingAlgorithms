import { useState } from 'react';
import Section from './Section.jsx';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from "../data"
import { Result } from "../SortingAlgo.js"

export default function Examples(){
    const [selectedTab, setSelectedTab] = useState('');
    const [userString, setUserString] = useState('');
    const [sortingResults, setSortingResults] = useState({});

    function handleSelect(selectedButton){
        setSelectedTab(selectedButton);
        setUserString(prevString => "")
    }

    function handleChange(event){
        setUserString(event.target.value);
    }

    function handleSort(){
        const result = Result(userString);
        setSortingResults(result);
    }

    let tabContent = <p>Please select a topic.</p>;

    if(selectedTab){
        tabContent = (<>
            <div id="tab-content">
                <h1>{EXAMPLES[selectedTab].title}</h1>
                <p>{EXAMPLES[selectedTab].description}</p>
                <p id="inputField">
                    <input onChange={handleChange} type="text" required value={userString} placeholder="e.g. 23 1 32 5 14"/>
                    <button onClick={handleSort}>Sort</button>
                </p>
                <h2>Sorted Array:</h2>
                <p className='result'>{sortingResults[selectedTab]}</p>
            </div>
        </>);
    }

    return (
        <Section title='Try Out' id='examples'>
            <Tabs buttonContainer="menu"
                Button={
                <>
                    <TabButton isSelect={selectedTab === "bubbleSort"} onClick={()=>handleSelect("bubbleSort")}>Bubble Sort</TabButton>
                    <TabButton isSelect={selectedTab === "mergeSort"} onClick={()=>handleSelect("mergeSort")}>Merge Sort</TabButton>
                    <TabButton isSelect={selectedTab === "selectionSort"} onClick={()=> handleSelect("selectionSort")}>Selection Sort</TabButton>
                    <TabButton isSelect={selectedTab === "quickSort"} onClick={()=>handleSelect("quickSort")}>Quick Sort</TabButton>
                </>}>
                {tabContent}
            </Tabs>         
        </Section>
    );
}
