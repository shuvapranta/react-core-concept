import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    const handleAdd =() => {
        const newCounter = count + 1
        setCount(newCounter)
    }
    const handleReduce =() => {
        const newCounter = count-1
        setCount(newCounter)
    }

    return (
        
        <div style={{ border:'2px solid tomato',borderRadius:'16PX'
        }}>
            <h3>Counter :{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}