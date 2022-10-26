import { useState } from 'react'

 const History = (props) => {
  return (
    <div>
      All: {props.allClicks.length}
      
    </div>
  )
 }
 //props.allClicks.forEach(elem) => {
//  if (elem == "g") {
//    
//  }
//}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const title1 = "Please leave feedback"
  const title2 = "Statistics"

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    console.log("clicked good")
    setGood(good + 1)
    setAll(allClicks.concat('g'))
    }

  const handleNeutralClick = () => {
    console.log("clicked neutral")
    setNeutral(neutral + 1)
    setAll(allClicks.concat('n'))
  }

  const handleBadClick = () => {
    console.log("clicked bad")
    setBad(bad + 1)
    setAll(allClicks.concat('b'))
  }

  return (
    <div>
      <h1>{title1}</h1>
      < Button handleClick={handleGoodClick} text="Good"/>
      < Button handleClick={handleNeutralClick} text="Neutral"/>
      < Button handleClick={handleBadClick} text="Bad"/>
      <h1>{title2}</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      < History allClicks={allClicks} />
    </div>
  )
  }


export default App