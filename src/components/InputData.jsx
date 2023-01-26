import React, { useState } from 'react'

const InputData = (props) => {
  const {mascotas, setMascotas} = props;
  const [agregar, setAgregar] = useState("");

  const handleAgregar = (e) =>{
    console.log("AGREGANDO");
    setAgregar(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMascotas([...mascotas, agregar]);
    setAgregar("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label>Mascotas:</label>
          <input type="text" value={agregar} onChange={handleAgregar} />
          <button type="submit">Enviar</button>
        </div>
    </form>

  )
}

export default InputData