
import { useState, useEffect, useContext } from 'react'
import React from 'react'

function HomeComponent({toggle}) {
  return (
    <>
    <div className='container'>
      {/* <h1 className='quizHeading'>QuizWizz</h1> */}
      {/* <img className='logopng' src="/logoai.png" alt="" /> */}
      <h3 style={{width:300}}> Welcome to QuizWiz! 🚀 Sharpen your React skills with 5 quick multiple-choice questions. Let's see how well you know React! 📚🔍 </h3>
      <button onClick={toggle} className='playButton'>Play</button>
    </div>
    </>
  )
}

export default HomeComponent