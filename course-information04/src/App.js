// Avançando para o uso de objetos


const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const exercises = [10, 7, 14];
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10,
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7,
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    },
  ]

  return (
    <div>
      <Header nome={course}/>
      <Content parte={parts}/>
      <Total total={exercises[0] + exercises[1] + exercises[2]}/>
    </div>
  )
}

export default App


function Header(props) {
  console.log(props);
  return (
    <>
    <small>Nome do curso</small>
    <h1> {props.nome} </h1>
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