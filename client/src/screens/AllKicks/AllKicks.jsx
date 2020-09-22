import React from 'react'
import { Link } from 'react-router-dom'
import "./AllKicks.css"

export default function AllKicks(props) {
  const{kicks} = props
  return (
    <div>
      {kicks.map(kick=>(
        <Link to={`/kicks/${kick.id}`}>
        <p>{kick.name}</p>
        <img src={kick.image_url}/>
      </Link>
      ))}
    </div>
  )
}

