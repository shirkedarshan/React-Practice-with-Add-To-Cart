import React, {useState} from "react"

function App() {
    const [answer] = useState("Yes")

    const person = {
        name: "Joe",
        age: 42
    }
    
    const { name, age } = person // array destructuring

    return (
        <div>
            <h1>Is state important to know? {answer}</h1>
        </div>
    )
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App