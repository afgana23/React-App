import { useState } from 'react'
import './App.css';
import Student from './Student';
import Login from './Login';



function App() {
  const student = ['ama', 'hod', 'jack', 'hot'];
  //mapping
  student.map((item) => {
    console.warn(item)
  })
  const [data, setData] = useState("ginni anjum")
  function apple() {
    setData("arisha rashid")

  }
  function getData(val) {
    console.warn(val.target.value)
    setData(val.target.value)
  }
  function sendData() {
    alert("hello from App")
  }
  return (

    <div className="App">
      {
         student.map((data)=>
         <p>{data}</p>
         )
   
      }
    

      <h1>Hello World !!---{data}</h1>
      <button onClick={apple}>click here</button>
      <input type='text' onChange={getData} ></input>
      <h3>{data}</h3>

      <p>prop uses </p>
      <Student a={23} name={data}></Student>
      <Login data={sendData}></Login>
      
      

    </div>
  );
}

export default App;
