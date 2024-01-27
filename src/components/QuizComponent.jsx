import { useState, useEffect, useContext } from 'react'

import React from 'react'

function QuizComponent({currentQuestion,QuizData,next,quit,checkAnswer,highlightToggle,highlight}) {
  return (
    <div className='quizContainer'>
    <div className='quizBox'>
        {/* <h1>Question</h1> */}
        <p>{currentQuestion + 1} of 5</p>
        <h1 className={highlight ? 'red' : 'null' } >{QuizData["text"]}</h1>

        <div className='options'>
            {/* <div onClick={(e) => {checkAnswer(QuizData)}} className="choices">{QuizData.options[0]}</div>
            <div onClick={(e) => {checkAnswer(e,QuizData["answer"])}} className="choices">{QuizData["optionB"]}</div>
            <div onClick={(e) => {checkAnswer(e,QuizData["answer"])}} className="choices">{QuizData["optionC"]}</div>
            <div onClick={(e) => {checkAnswer(e,QuizData["answer"])}} className="choices">{QuizData["optionD"]}</div>    */}

            {QuizData.options.map((option) => {
              return <div key={option.id} onClick={(e) => {checkAnswer(option.isCorrect)}} className="choices">{option.text}</div>
            })
            }

        </div>

        {/* <div className='controls'>
            <div onClick={previous} className="controlButtons previous">previous</div>
            <div onClick={next} className="controlButtons next">next</div>
            <div onClick={quit} className="controlButtons quit">quit</div>
        </div> */}
        <div className="pretty p-switch p-round p-thick">
              <input onChange={highlightToggle} type="checkbox" />
              <div className="state p-danger">
                <label>Highlight Text</label>
              </div>
            </div>

    </div>
  </div>
  )
}

export default QuizComponent