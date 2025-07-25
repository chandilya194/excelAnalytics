import { useState } from 'react'
import axios from 'axios';


function App() {

  const[name,SetName]=useState("")
const Handle=()=>{
axios.post("http://localhost:5000/",{name})
.then((res)=>{
console.log(res.data)
})
}

  return (
    <>
     <h1>hello</h1>
     <input type="name" placeholder="name" onChange={(e)=>SetName(e.target.value)}></input>
     <button onClick={Handle}>submit</button>
     
    </>
  )
}

export default App
