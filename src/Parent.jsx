import { useState } from "react";
import Child from "./Child";
import {textContext} from "./textContext"

export default function Parent(){
   const [ text , setText ] = useState("halim")


    return <div>
        <textContext.Provider value={{ setText }}>
        <h1>Hello Parent this is text in parent {text}</h1>
        <Child/>
        </textContext.Provider>
    </div>
}