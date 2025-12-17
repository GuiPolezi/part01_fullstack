function App() {
  console.log('Olá do componente');
  console.log(6+1);

  const hoje = new Date();

  const name = "Neymar jr";
  const idade = "32";
  return (
    <div>
      <h1>Escrevendo em React</h1>
      <p>Olá, Mundo!</p>
      <small>Data: {hoje.toUTCString()}</small>
      <Teste nome="Guilherme" idade="20"/>
      <Teste nome={name} idade={idade}/>
      <Persona />
    </div>
  );
}

export default App;

function Teste(props) {
  console.log(props);
  
  return (
    <div>
      <h2>Hello {props.nome}, your age is {props.idade} years old</h2>
    </div>
  );
}

function Persona() {

  const person = [
    {nome: 'Michael Jordan', nba: "6 wins"}
  ];
  return (
    <>
    <p>The goat is <strong>{person[0].nome}</strong></p>
    <p>Number of victorys = {person[0].nba}</p>
    </>
  )
}
