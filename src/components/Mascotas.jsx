import React, { useState } from 'react'
import InputData from './InputData'
import ListarMascotas from './ListarMascotas'

const Mascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  return (
    <>
      <h1>ELEVANDO O LEVANTAMIENTO DE ESTADO</h1>
      <InputData mascotas={mascotas} setMascotas={setMascotas}/>
      <ListarMascotas mascotas={mascotas}/>
      <hr />
    </>
  )
}

export default Mascotas
