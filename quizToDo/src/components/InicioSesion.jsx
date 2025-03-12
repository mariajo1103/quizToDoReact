import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import "../styles/StyLogin.css"
import llamados from '../services/llamados'
import Swal from 'sweetalert2'

function InicioSesion() {

  const [nombreUsuario,SetNombreUsuario]=useState()
  const [passwordUsuario,SetPasswordusuario]=useState()
  const [usuarios, SetUsuarios]=useState()

  const navigate = useNavigate()

  useEffect(() => {

    async function fetchDaraUsers() {

      const datos = await llamados.getUsers()

      SetUsuarios(datos)
      
      
    };

    fetchDaraUsers();


  }, []);







  function nombre(evento) {
    SetNombreUsuario(evento.target.value)
  }

  function password(evento) {
    SetPasswordusuario(evento.target.value)
  }

  function iniciar() {
    
    console.log(nombreUsuario,passwordUsuario);
    console.log(usuarios);
    
    const encontrado = usuarios.filter(usuario => usuario.nombre===nombreUsuario && usuario.contraseña=== passwordUsuario )
    
    if (encontrado.length === 0) {
      console.log("usuario o contraseña incorrectos");

      Swal.fire({
        icon: "error",
        title: "Usuario o contraseña incorrecta",
      });

      
    }else{

      setTimeout(() => {
        navigate("/Home")
      }, 300);

      localStorage.setItem("Usuario", JSON.stringify(nombreUsuario))

    }
    

  }
  return (
    <div className='sesion'>
    <h1>Inicio sesion</h1>

    <label htmlFor="">Nombre</label><br />
    <input value={nombreUsuario} onChange={nombre} type="text" placeholder='Nombre'/><br /><br />

    <label htmlFor="">Contraseña</label><br />
    <input value={passwordUsuario} onChange={password} type="password" placeholder='Contraseña'/><br /><br />
    <button onClick={iniciar} className='btnIni'>INICIAR</button>

    <p>¿Quieres Registrarte? <Link to={'/Register'} >Registrarme</Link> </p>

    </div>
  )
}

export default InicioSesion