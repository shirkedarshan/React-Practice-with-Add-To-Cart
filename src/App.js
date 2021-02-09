import React, {useState} from "react"
import useCounter from "./useCounter"

function App() {
    const [number, add , subtract] = useCounter()
    
    return (
        <div>
            <h1>The count is {number}</h1>
            <button onClick={add}>Add 1</button><br/>
            <button onClick={subtract}>Subtract 1</button>
        </div>
    )
}

export default App