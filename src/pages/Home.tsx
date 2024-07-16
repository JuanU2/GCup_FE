import NavBar from "../components/NavBar";
import routes from "../routes";
import React from 'react'

export default function Home() {
  return (
    <div>
        <NavBar options={routes}/>
    </div>
  )
}
