// Criar 3 componentes -> Header, Content e Total.
// Todos os dados devem residir em App. - passaremos os dados por props
// Header deve renderizar o nome do curso
// Content renderiza as partes e número de exercícios
// Total renderiza o total de exercicios.
/*
const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
} */

function App() {
  console.log("lOG DO APP");

  const header = "Desenvolvimento de aplicação Half Stack";
  const partes = ["Fundamentos da biblioteca React", "Usando props para passar dados", "Estado de um componente"]
  const exercises = [10, 7, 14];
  return (
    <div>
      <Header nome={header}/>
      <Content parte1={partes[0]} parte2={partes[1]} parte3={partes[2]}
        exercises1={exercises[0]} exercises2={exercises[1]} exercises3={exercises[2]}
      />
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

function Content(props) {
  console.log(props)

  return (
    <>
    <p>
      Part1 = {props.parte1} | Exercises = {props.exercises1}
    </p>
    <p>
      Part2 = {props.parte2} | Exercises = {props.exercises2}
    </p>
    <p>
      Part3 = {props.parte3} | Exercises = {props.exercises3}
    </p>
    </>
  )

}