

function Dice(props) {

    const handleClick = () => {
        props.rollDice()
      
    }

  return (
    <>
      <button className="dice" onClick = {handleClick}>Lanzar Dado</button>
      <div className="dice_1">🎲</div>
    </>
  )
}

export default Dice