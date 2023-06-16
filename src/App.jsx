import React from 'react'
import { render } from 'react-dom'
import './App.css'
import Listing from './components/Listing'
import dataBase from './data.json'

const data = JSON.parse(JSON.stringify(dataBase)) 
console.log(data)

function App() {
    return (
      <>
        <Listing data={data}/>
      </>
    )
}

export default App
