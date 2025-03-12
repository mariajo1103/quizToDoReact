import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/StyLogin.css"
import llamados from '../services/llamados.jsx'

function ForRegister() {

  const [nombreUsuario, setNombreUsuario]= useState()
  const [passwordUsuario, setPassword]= useState()
  const navigate= useNavigate()

  function nombre(evento) {
    setNombreUsuario(evento.target.value)
  }

  function password(evento) {
    setPassword(evento.target.value)
  }


  function cargar() {
    llamados.postUsers(nombreUsuario,passwordUsuario)

    navigate("/")
  }



  return (
    <div className='contenedorP'>

    <h1>Registro</h1>

    <label htmlFor="">Nombre</label><br />
    <input value={nombreUsuario} onChange={nombre} type="text" placeholder='Nombre' /><br />

    <label htmlFor="">Contraseña</label><br />
    <input value={passwordUsuario} onChange={password} type="password" placeholder='Contraseña'/><br />
    <button onClick={cargar}>REGISTRARME</button>

    <p>¿Ya tienes cuenta?  <Link to={'/'} >Iniciar Sesion</Link></p>

    </div>
  )
}

export default ForRegister