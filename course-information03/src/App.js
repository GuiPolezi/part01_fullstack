// Refatore o componente Content


function App() {
  console.log("lOG DO APP");

  const header = "Desenvolvimento de aplicação Half Stack";
  const exercises = [10, 7, 14];
  return (
    <div>
      <Header nome={header}/>
      <Conteudo />
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


function Conteudo() {
  return (
    <div>
      <Part parte="1 Fundamentos da biblioteca React" exercicio="10"/>
      <Part parte="2 Usando props para passar dados" exercicio="7"/>
      <Part parte="3 Estado de um componente" exercicio="14"/>
    </div>
  )
}

function Part(props) {
  console.log(props);
  return (
    <>
    <p>Parte: {props.parte} | Exercicio: {props.exercicio}</p>
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