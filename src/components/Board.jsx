import React, { useState } from 'react'
import Grogu from './Grogu'

function Board({groguPosition}) {

  const cells = Array(7).fill(null);

  const allCells = cells.map((item, indice) => <div key={indice} className="cell">
    {groguPosition === indice ? <Grogu/> : null}
  </div>)

  return (
   
      <section className="board">
       {allCells}
      </section>
    
  )
}

export default Board
