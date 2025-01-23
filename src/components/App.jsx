import {useState} from "react";
import "../styles/App.scss";

function App() {

  const [grogu, setGrogu] = useState (0);
  const [cookie, setMercancias] = useState (["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState (["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState (["🐸", "🐸", "🐸"]);
  const [dado, setDado] = useState (0);
//   const [game, setGame] = useState ("");

// const getRandomNumber = (1, 5) => {
//     return Math.random() * (max - min) + min;
//     console.log(getRandomNumber);

const handleClickDado = () => {
  getRandomNumber(1, 5)
  }


  return (
   <>
   <section className="page" >
      
    <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

      <section>
        <button className="dice" onClick = {handleClickDado}>Lanzar Dado</button>
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