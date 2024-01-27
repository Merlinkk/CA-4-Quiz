
import { useState, useEffect, useContext } from 'react'
import React from 'react'

function HomeComponent({toggle}) {
  return (
    <>
    <div className='container'>
      {/* <h1 className='quizHeading'>QuizWizz</h1> */}
      <img className='logopng' src="/logoai.png" alt="" />
      <button onClick={toggle} className='playButton'>Play</button>
    </div>
    </>
  )
}

export default HomeComponent