import {useState} from "react"
import "./App";
function Day3 (){
    const [counter , setCounter] = useState(1);
    console.log(counter ,"counter")
    function Increment (){
        setCounter(counter + 1);
    }
    function Decrement (){
        setCounter (counter - 1);
    }
    function Reset (){
        setCounter (1);
    }
    return (
        <div className="counter-box">
          <h1 style={{height: "50vh", backgroundColor:"lightgray" , display:"flex"}} >Counter:{counter} </h1> 
          <div className="buttons">
          <button onClick={Increment} style={{fontSize:"20px" , color:"black" ,backgroundColor: "orange"}}>Increment+</button>
          <button onClick={Decrement} style={{fontSize:"20px" , color:"black" ,backgroundColor: "pink"}}>Decrement-</button>
          <button onClick={Reset} style={{fontSize:"20px" , color:"black" ,backgroundColor: "yellow"}}>Reset</button>
          </div>
        </div>
    )
} 
export default Day3;    