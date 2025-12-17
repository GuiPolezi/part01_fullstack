// Avançando para o uso de objetos

const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content course={course.parts[0].name} ex={course.parts[0].exercises}/>
      <Content course={course.parts[1].name} ex={course.parts[1].exercises}/>
      <Content course={course.parts[2].name} ex={course.parts[2].exercises}/>
      <Total course={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App


function Header(props) {
  console.log(props);
  return (
    <>
    <small>Nome do curso</small>
    <h1> {props.course} </h1>
    </>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Part: {props.course} | exercises: {props.ex}</h3>
    </div>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <>
    <p>Total de exercícios: {props.course}</p>
    </>
  )
}