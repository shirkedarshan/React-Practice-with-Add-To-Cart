import React from "react"
import Card from "./Card"

function App() {
    return (
        <div>
            <Card cardColor="red" height={100} width={200} />
            <Card />
            <Card cardColor="green" height={200} width={100}/>
        </div>
    )
}

export default App