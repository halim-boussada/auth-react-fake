import { useContext, useState } from "react"
import { textContext } from "./textContext"

export default function Child(){
    const [input , setInput] = useState("")
    const { setText } = useContext(textContext)
    return <div>
        <h1>Hello</h1>
        <input type="text" name="" id="" onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={()=> setText(input)} >submit</button>
    </div>
}