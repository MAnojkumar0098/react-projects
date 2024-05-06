import React from 'react'
import { useState } from 'react'

function Info() {
    let[arr,setArr]=useState([]);
    function fn(){
        setArr(()=>[...arr,<h1 className='info'>hii</h1>]);
    }
  return (
    <div>{arr}<button onClick={fn}>click!</button></div>
  )
}

export default Info