import React, {useState} from "react";
import {BiReset} from "react-icons/bi"
import {FaPlus, FaMinus} from "react-icons/fa"

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h1>Counter</h1>
            <headers>Count is : <strong>{count}</strong></headers>
            <div className="row mt-4">
                <FaPlus style={{backgroundColor:"#fff",color:"#120E43",width:50,height:50,borderRadius:5,margin:5}} className="col" onClick={()=>(count <10 ? setCount(count+1) : "")}/>
                <FaMinus  style={{backgroundColor:"#fff",color:"#120E43",width:50,height:50,borderRadius:5,margin:5}} className="col" onClick={()=>(count >0 ? setCount(count-1) : "")}/>
                <BiReset  style={{backgroundColor:"#fff",color:"#120E43",width:50,height:50,borderRadius:5,margin:5}} className="col" onClick={()=>(setCount(0))}/>
            
            </div>
        </div>
    )
}

export default Counter;