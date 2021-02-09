import {useState} from "react"

function useCounter() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    return [count, increment , decrement]
}

export default useCounter