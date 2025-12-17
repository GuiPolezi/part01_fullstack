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
      <p> part1: {props.parte[0].name} | exercises: {props.parte[0].exercises}</p>
      <p> part2: {props.parte[1].name} | exercises: {props.parte[1].exercises}</p>
      <p> part3: {props.parte[2].name} | exercises: {props.parte[2].exercises}</p>
    </div>
  )
}


function Total(props) {
  console.log(props)
  return (
    <>
      <p>Total de exercícios: {props.total}</p>
    </>
  )
}