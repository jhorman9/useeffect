import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
//----------------------------------------------//

//PARA CONSUMIR UNA APIS
  const [title, setTitle] = useState("");
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => setTitle(res))
  }, [])
//PARA CONSUMIR UNA APIS
//---------------------------------------------//



//------------------------------------------------//

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const handleInput = () =>{
    setIsVisible(!isVisible)
  }
  
  const increment = () =>{
    setCount(count+1)
  }
  
  const decrement = () =>{
    setCount(count-1)
  }

  useEffect(() => { //para ejecutar codigo que solo quiero que se ejecute una vez
    console.log("Me rendeciré desde el useEffect");
    const colors = ["#081c15","#ffb703", "#22223b", "#023e8a", "#003049", "#03071e", "#370617", "#6a040f", "#9d0208", "#dc2f02", "#e85d04", "#f48c06", "#9a031e", "#ffc300"];
    let colorLength = Math.floor(Math.random() * colors.length);
    let getColorRandom = colors[colorLength];
    document.body.style = `background:${getColorRandom}`;
  },[isVisible]) //el [] es conocido como el arreglo de dependencia
  //en las dependencia se ponen props o useStates(estados) esto es usado para
  //que unicamente cuando le de click a eso funcione, puedo pasar mas de uno en el arreglo
  //de dependencia

  // const colors = ["#081c15","#ffb703", "#22223b", "#023e8a", "#003049", "#03071e", "#370617", "#6a040f", "#9d0208", "#dc2f02", "#e85d04", "#f48c06", "#9a031e", "#ffc300"];
  //   let colorLength = Math.floor(Math.random() * colors.length);
  //   let getColorRandom = colors[colorLength];
  //   document.body.style = `background:${getColorRandom}`;
  // ESTO DE ARRIBA LO METIDOS AL useEffect PORQUE SI LO TENGO AFUERA
  // SE VA A RENDERIZAR CADA VEZ QUE LE DE CLICK A LOS BOTONES Y 
  // CAMBIARÁ

  //UseEffect se usa para el consumo de APIS

  useEffect(() =>{
    console.log("counter cambió :D")
  }, [count])
  return (
    <div className="App">
      {/* <h2 style={{color:"white", textAlign:"center"}}>{title.data.title}</h2> */}
      <div className='contain'>
        <div className="counter">
          <div className='number'>{count}</div>
          <div className="row">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>
        </div>
        <hr />
        <div className='password'>
          <input type={isVisible ? "password" : "text"} />
          <button onClick={handleInput}>{isVisible ? "Mostrar" : "Ocultar"}</button>
        </div>
      </div>
    </div>
  )
}

export default App

//Para instalar axios debemos usar 
// npm i axios,  en la terminal