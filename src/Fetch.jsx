import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const Fetch = () => {

    const [state,setState] = useState([])
    // using fetch
    const fetchData = async () => {
            await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: "GET"
            }).then((res) =>res.json()).then((data) => setState(data))
            
    }

    // using Axios
    const fetchAxios = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

        setState(res.data)
    }

    useEffect(() => {
        fetchData();
        // fetchAxios();
    },[])
  return (
    <div>
        {state.map((item) => {
            return (<div key={item.id}><h3>{item.title}</h3></div>)
        })}
    </div>
  )
}
