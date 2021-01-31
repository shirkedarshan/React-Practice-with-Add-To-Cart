import React, { Component } from "react"
import {withPointlessHOC} from "./withPointlessHOC"
import {withExtraPropAdded} from "./withExtraPropAdded"

function App(props) {
    console.log(props) //   Check console log
    return (
        <div>Hello world! <h2>{props.anotherProp}</h2></div>
        
    )
}

const ExtraPropComponent = withExtraPropAdded(App)
export default ExtraPropComponent