// Avançando para o uso de objetos


const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const exercises = [10, 7, 14];
  const part1 = {
    name: 'Fundamentos da biblioteca React',
    exercises: 10
  }
  const part2 = {
    name: 'Usando props para passar dados',
    exercises: 7
  }
  const part3 = {
    name: 'Estado de um componente',
    exercises: 14
  }

  return (
    <div>
      <Header nome={course}/>
      <Content part1={part1.name + part1.exercises} />
      <Content part2={part2.name + part2.exercises} />
      <Content part3={part3.name + part3.exercises} />
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
  console.log(props)
  return (
    <>
    <p>{props.part1}</p>
    <p>{props.part3}</p>
    <p>{props.part2}</p>
    </>
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