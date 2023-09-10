import { useEffect, useState } from "react"
import User from "./user"
import './users.css'

export default function Users(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data))},[]
    )
    return(
        <div className="box">
            <h2 >Users:{users.length}</h2>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}