import { useState } from "react"

export default function Player(){
    const [team, setTeam]=useState(11)
    const handleAdd =()=>{
        const newTeam = team+1
        setTeam(newTeam)
    }
    const handleRemove =()=>{
        
        setTeam(team-1)
    }
    const playerStyle ={
        border:'2px solid green',
        margin:'20px ',
        padding:'20px ',
        borderRadius:'20px',
    }
    return(
        <div style={playerStyle}>
            <h2>Player:{team}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}