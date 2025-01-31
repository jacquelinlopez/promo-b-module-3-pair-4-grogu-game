import {useEffect, useState} from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form"



function App() {

  const [grogu, setGrogu] = useState (0);
  const [cookies, setCookies] = useState (["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState (["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState (["🐸", "🐸", "🐸"]);
  const [dado, setDado] = useState (0);
  //variable de estado para poder cambiar el mensaje cada vez que tiramos el dado
  const [gameState, setGameState] = useState ("En curso");
  const [name, setName]= useState ("");
  

  useEffect(()=> {
    if(grogu === 6){
      setGameState(`¡¡Grogu se ha comido el cargamento!! ${name} has perdido`)
    } else if(cookies.length === 0 && eggs.length === 0 && frog.length === 0) {
      setGameState(`${name} ganaste, Mando completa la misión`)
    } else {
      setGameState (gameState)
    } 
  }, [grogu, cookies, eggs, frog]) 


const getRandomNumber = ()=>{
  return Math.floor(Math.random() * 4) + 1;

};
const rollDice  = () => {
  const randomNumber = getRandomNumber();
  setDado(randomNumber);

  if (randomNumber === 4){
    setGrogu(grogu + 1);
    setGameState("Grogu ha avanzado una casilla");
    //ponemos el && para decirle que si sale 3 y el array tiene algo, quite una mercancía
  }else if (randomNumber === 3 && cookies.length > 0){
    //creamos un array nuevo con "spread operator" que hace una copia del array y nos permite modificar la propiedad que necessitemos, en este caso borrar un elemento del array 
    const newCookies = [...cookies];
    newCookies.splice(0,1);
    //volvemos a pintar el array modificado
    setCookies(newCookies);
    setGameState(`${name} se ha descargado una galleta`);
  }else if (randomNumber === 2 && eggs.length > 0){
    // setFrog(frog - 1)
    const newEggs = [...eggs];
    newEggs.splice(0,1);
    setEggs(newEggs);
    setGameState(`${name} se ha descargado un huevo`);
  }else if (randomNumber === 1 && frog.length > 0) { 
    // setEggs(eggs - 1)
    const newFrog = [...frog];
    newFrog.splice(0,1);
    setFrog(newFrog);
    setGameState(`${name} se ha descargado una rana`);
  } else if(cookies.length === 0){
    setGameState(`${name} No hay galletas a descargar`);
  }else if (frog.length === 0){
    setGameState(`${name} No hay ranas a descargar`);
  } else if (eggs.length === 0){
    //si los arrays de mercancías estan vacios, sale este mensaje
    setGameState(`${name} No hay huevos a descargar`);
  } else {
    setGameState("Grogu ha ganado!")
  }
 }
 
  return (
   <>
   <section className="page" >
     <Header/>
    <main className="page">
    <Board groguPosition = {grogu}/>
      <section className="diceSection">
        <Form setName={setName} name={name}/>
        <Dice rollDice={rollDice}/>
        <div className="game-status">{gameState}</div>
        {/* ponemos variable para cambiar el mensaje */}
      </section>

      <section className="goods-container">
        {/* ponemos variable para que el array se vaya actualizando cada vez que tiramos el dado */}
        <div className="goods-item">{cookies}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{eggs}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{frog}</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </section>
    
  </>)
}

export default App