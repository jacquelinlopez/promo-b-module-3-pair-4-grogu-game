import {useState} from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";

function App() {

  const [grogu, setGrogu] = useState (0);
  const [cookie, setCookies] = useState (["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState (["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState (["🐸", "🐸", "🐸"]);
  const [dado, setDado] = useState (0);
//   const [game, setGame] = useState ("");

const getRandomNumber = ()=>{
  return Math.floor(Math.random() * 4) + 1;

};
const rollDice  = () => {
  const randomNumber = getRandomNumber();
  if (randomNumber === 4){
      setGrogu(grogu + 1)
      console.log(setGrogu);
  }else if (randomNumber === 3){
      setCookies(cookie - 1)
  }else if (randomNumber === 2){
    setFrog(frog - 1)
  }else{ 
    setEggs(eggs - 1)
  }
  
  /*se elimina mercancia
  funcion que mueve a grogu*/
 }
 


  return (
   <>
   <section className="page" >
     <Header/>

    
    <main className="page">
      
    <Board/>

      <section>
        <button className="dice" onClick = {rollDice}>Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </section>
    
  </>)
}

export default App