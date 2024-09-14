import React, {useState} from 'react'
 import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
 //var data = require("./countrydata.json")

 import data from './countrydata.json';
const SearchBar = () => {
  const [input ,setInput] = useState("");

 const onChange = (e) => {
  setInput(e.target.value)

 }


  return (
    <>
       <div className="input-wrapper">
           <FaSearch id="search-icon"/> 
          <input  placeholder='Type to Search...' value={input}
          onChange={onChange} />
       </div>
       <div className="dropdown">

             {data.map( record => { 
              return(
              <div className='dropdown-row'>
                 {record.country} 
             </div>
              )
            })
          }
       </div>
      
    </>
  )
}

export default SearchBar
