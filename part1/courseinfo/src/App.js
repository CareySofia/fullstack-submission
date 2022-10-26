const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Parts = (props) => {
  return (
    <div>
      <p>{props.exercise.name} {props.exercise.exercises}</p>
  </div>
  )
    
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.amount[0].exercises + props.amount[1].exercises + props.amount[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }  

  return (
    <div>
      < Header name = {course.name}/>
      < Parts exercise = {course.parts[0]}/>
      < Parts exercise = {course.parts[1]}/>
      < Parts exercise = {course.parts[2]}/>
      < Total amount = {course.parts}/>
    </div>
  )
}

export default App