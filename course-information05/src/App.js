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

const Total = (props) => {
  console.log(props);
  return (
    <>
    <p>Total de exercícios: {props.course}</p>
    </>
  )
}