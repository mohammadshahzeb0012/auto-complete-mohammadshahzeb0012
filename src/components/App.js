
import React from "react";
import './../styles/App.css';
import { useState } from "react"

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {
  const [search,setSearch] = useState('')

  const changeHandel = (e)=>{
     setSearch(e.target.value)
  }
  return (
      <div>
          <h1>Search Item</h1>
          <input type="text"  onChange={changeHandel}/>
          <ul>
              {search && fruits.filter(elem=> elem.indexOf(search) != -1)
              .map(elem=> <li>{elem}</li>)
              }
          </ul>
      </div>
  )
}

export default App
