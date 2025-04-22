import axios  from "axios"
import { useEffect, useState } from "react"
import { data } from "react-router-dom"

const Student=()=>{
    const[allstudents,setstudent]=useState([])
    const[age,setage]=useState(12)
    const getstdsserver=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(({data})=>{
            console.log(data)
            setstudent(data)
        })

    }
    const changeage=()=>{
        setage(age+5)
    }
    useEffect(()=>{
        getstdsserver()
    },[age])
    return(<>
    <h1>{age}</h1>
    <button type="button" onClick={changeage}>Changeage</button>
    <ul>{allstudents.map((val,i)=>{
        return <li key={i}>{val.username}</li>

    })}</ul>
    
    </>)

}
export default Student