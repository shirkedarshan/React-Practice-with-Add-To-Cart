import React from "react"

function App() {    
    // ===
// Primitive types (strings, numbers, booleans)
// console.log("Hi" === "Hi")

// Complex types (array, object)
// console.log({name: "Joe"} === {name: "Joe"})

const arr1 = [1, 2, 3, [4]]
const arr2 = [1, 2, 3, [4]]

const state = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}

const state2 = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}

// console.log(state.favNumber === state2.favNumber)
// console.log(state.name === state2.name)
// console.log(state.address === state2.address)

const person = {
    name: "Sarah"
}

const anotherPerson = {
    name: "Sarah"
}

console.log(anotherPerson === person)
    return (
        <div>
            <h2>Shallow Comparison Check Console</h2>
        </div>
    )
}

export default App