// Criar 3 componentes -> Header, Content e Total.
// Todos os dados devem residir em App. - passaremos os dados por props
// Header deve renderizar o nome do curso
// Content renderiza as partes e número de exercícios
// Total renderiza o total de exercicios.


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

function Total(props) {
  console.log(props)
  return (
    <>
      <p>Total de exercícios: {props.total}</p>
    </>
  )
}