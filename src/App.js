import "./App.css"
import React, {useState, useEffect} from "react"

/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */

function App() {

    const STARTING_TIME = 5

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState( STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [count, setCount] = useState("0")

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function startClock() {
        setIsTimeRunning(true)
        setTimeRemaining( STARTING_TIME)
        setText("")
        document.getElementById('anc').disabled = false
        document.getElementById('start').disabled = true
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {    
            setCount(0)
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            setIsTimeRunning(false)
            setCount(calculateWordCount(text))
            document.getElementById('anc').disabled = true 
            document.getElementById('start').disabled = false
        }

    }, [timeRemaining, isTimeRunning])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={true}
                id={"anc"}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button id={"start"} onClick={startClock}>Start</button>
            <h1>Word count: {count}</h1>
        </div>
    )
}

export default App
