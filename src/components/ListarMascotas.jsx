import React from 'react'

const ListarMascotas = ({ mascotas }) => {
  return (
    <div>{mascotas.map( (mascota, index)=>  <h3 className={mascota} key={index}>{mascota}</h3>  )}</div>
  )
}

export default ListarMascotas