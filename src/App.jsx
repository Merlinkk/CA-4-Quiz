import React,{ useState, useEffect, useContext, createContext } from 'react'
import './App.css'

import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'
import  Questions  from './components/questions'
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import SunAnimation from './components/SunAnimation'

  export const ThemeContext = createContext(null); 

function App() {

  const [home, setHome] = useState(true)
  const [quiz, setQuiz] = useState(false)
  const [result, setResult] = useState(false)

  const [score, setScore] = useState(0)
  const [currentQuestion , setIndex] = useState(0)
  const [attempted, setAttempt] = useState(0)

  const [theme, setTheme] = useState('light') 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [highlight, setHighlight] = useState(false)

  function highlightToggle(){
    // console.log(highlight);
    setHighlight(!highlight)
  }

  function toggleTheme() {
    console.log("togglingTheme");
    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    }, 350);
  }
  

  useEffect(() => {
    console.log(theme);
  }, [theme]);


  function toggleStartQuiz(){
    setHome(false)
    setQuiz(true)
  }

  function toggleNextQuestion(){
    if(currentQuestion < Questions.length -1){
      setIndex(currentQuestion + 1)
      }
      // console.log(score,currentQuestion,attempted)
      resultPopUp()  
    }


  function toggleQuit(){
    setHome(false)
    setQuiz(false)
    setResult(true)

    alert("You have quit the quiz")
  }

  function quizReset(){
    setHome(true)
    setQuiz(false)
    setResult(false)
    setScore(0)
    setAttempt(0)
    setIndex(0)
  }

  function playAgain(){
    setQuiz(true)
    setResult(false)
    setScore(0)
    setAttempt(0)
    setIndex(0)
  }

  function checkAnswer(check){
    check ? setScore(score+1) : null
    toggleNextQuestion()
    resultPopUp()
    setAttempt(attempted+1)
  }

  function resultPopUp(){
    if(currentQuestion == Questions.length -1 ){
      setHome(false)
      setQuiz(false)
      setResult(true)
    }
  }

  
  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>


      <div className='rootContainer' id={theme}> 
      <SunAnimation />
      <DarkModeToggle 
      id='darkModeToggle'
      className='darkModeToggle'
        onChange={toggleTheme} 
        isDarkMode={isDarkMode} 
      />
        {home ? <HomeComponent toggle={toggleStartQuiz} />: null}
        {quiz ? <QuizComponent 
        currentQuestion = {currentQuestion}
        QuizData = {Questions[`${currentQuestion}`]} 
        next = {toggleNextQuestion}
        // previous = {togglePreviousQuestion}
        quit = {toggleQuit}
        checkAnswer = {checkAnswer}
        highlightToggle = {highlightToggle}
        highlight = {highlight}
        />: null}
        
        {result ? <ResultComponent 
        Result = {score}
        Attempted = {attempted}
        QuizReset={quizReset}
        PlayAgain={playAgain}
        />: null}
      </div>
    </ThemeContext.Provider>
</>
  )
}

export default App