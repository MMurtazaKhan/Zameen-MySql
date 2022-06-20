import React from 'react'
import "./Search.css";
import {useRef, useState} from 'react'

const Search = () => {
    const optionTab = useRef(null) 
    const [show, setshow] = useState("yes")
    
    const switchTabs = (e, tab) =>{
        if (tab==="yes") {
            
            optionTab.current.classList.add("collapse-label");
            optionTab.current.classList.remove("null-container");  
            setshow("yes");
        }
        else{
            optionTab.current.classList.add("null-container");
            optionTab.current.classList.remove("collapse-label");  
            setshow("no");
        }
    }
  return (
    <div className='Search-container'>
    <h1>Search Properties for Sale</h1>
    <div className="options-container">
        <div className="first-row">
    <div className="drop-down">
    <label for="City"> City </label>
    <select name="City" id="City">
        <option value="Karachi">Karachi</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
    </select>
    </div>
    <input type="text" placeholder='Location' className='collapse-label' onClick={(e)=> switchTabs(e,show)}/>
    <button>Find</button>
    </div>

    <div className="second-row null-container" ref={optionTab}>
        <div className="drop-down">
    <label for="Purpose"> Purpose </label>
    <select name="Purpose" id="Purpose">
        <option value="Buy property">Buy property</option>
        <option value="Sell property">Sell property</option>
        <option value="Rent property">Rent property</option>
    </select>
    </div>

    <div className="drop-down">
    <label for="Price"> Price </label>
    <div className="min-max">
    <select name="Min" className='price-box' id="Price-1" placeholder='Min'>
        <option value="">0</option>
        <option value="">500000</option>
        <option value="">1000000</option>
        <option value="">5000000</option>
        <option value="">10000000</option>
        <option value="">20000000</option>
        <option value="">50000000</option>
    </select>
    <p>to</p>
    <select name="Max" className='price-box' id="Price-2" placeholder='Max'>
        <option value="">Max</option>
        <option value="">0</option>
        <option value="">500000</option>
        <option value="">1000000</option>
        <option value="">5000000</option>
        <option value="">10000000</option>
        <option value="">20000000</option>
        <option value="">50000000</option>
    </select>
    </div>
    </div>

    <div className="drop-down">
    <label for="Area"> Area (Marla)</label>
    <div className="min-max">
    <select name="Min" className="area-box" id='Area-1'>
    
        <option value="">0</option>
        <option value="">2</option>
        
    </select>
    
    <p>to</p>
    <select name="Max" className="area-box" id="Area-2">
        <option value="">2</option>
        <option value="">0</option>
        <option value="">2</option>
        
    </select>
    </div>
    </div>
    </div>
    </div>
  
</div>
  )
}

export default Search