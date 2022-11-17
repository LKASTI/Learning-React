import './App.css';
import {useState, useEffect} from "react"
import axios from 'axios'


function App() {
  const [excuse, setExcuse] = useState('')

  const fetchExcuse = (excuseType) => {
    axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuseType}/`).then((res) =>{
      setExcuse(res.data[0].excuse)
      // console.log(res.data[0])
    })
  }
  
  return(
    <div className ="App">
      <h1>Generate Excuse</h1>
      <button onClick={() => {fetchExcuse('party')}}> Party</button>
      <button onClick={() => {fetchExcuse('family')}}> Family</button>
      <button onClick={() => {fetchExcuse('office')}}> Office</button>
      
      <p>{excuse}</p>
    </div>
  )
}

export default App;
