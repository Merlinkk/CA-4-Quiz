
import { useState, useEffect, useContext } from 'react'
import React from 'react'

function HomeComponent({toggle}) {
  return (
    <>
    <div className='container'>
      <h1 className='quizHeading'>Quiz App</h1>
      <button onClick={toggle} className='playButton'>Play</button>
    </div>
    </>
  )
}

export default HomeComponent