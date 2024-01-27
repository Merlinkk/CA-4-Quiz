import { useState, useEffect, useContext } from 'react'

import React from 'react'

function ResultComponent({Result,Attempted,QuizReset,PlayAgain}) {
  return (
    <div className='resultContainer'>
        <div className='quizBox result'>
        {/* <h1 className='headingResult'>Check out the result!</h1> */}
            <h2 >{Result === 5 ? "Excellent" : "You need more practice!"}</h2>
            <h1 className='scoreLine'>Your Score is {(Result/5*100).toFixed(0)}%</h1>

            {/* <div className='quizStats'>
                <div className='statElement'>
                    <span>Total number of questions</span>
                    <span>5</span>
                </div>
                <div className='statElement'>
                    <span>Number of attempted questions</span>
                    <span>{Attempted}</span>
                </div>
                <div className='statElement'>
                    <span>Number of correct answers</span>
                    <span>{Result}</span> 
                </div>
                <div className='statElement'>
                    <span>Number of wrong answers</span>
                    <span>{5 - Result}</span>
                </div>
            </div> */}
        <div className='controls resultControls'>
            <div onClick={PlayAgain} className="controlButtons playAgain">Play Again</div>
            <div onClick={QuizReset} className="controlButtons home">Back to Home</div>
        </div>
        </div>


    </div>
  )
}

export default ResultComponent
