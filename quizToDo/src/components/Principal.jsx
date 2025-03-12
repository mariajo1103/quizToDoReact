import React, {useState, useEffect} from 'react'
import "../styles/Home.css"
import Swal from 'sweetalert2';
import ConsultasLLamados from '../services/consultasLlamados'


function Principal() {

  const Usuario = JSON.parse(localStorage.getItem("Usuario"))
  const [consultas, SetConsultas]=useState([])

  useEffect(() => {
  
      async function fetchDaraUsers() {
  
        const datos = await ConsultasLLamados.getconsults()
  
        SetConsultas(datos)
        
        
      };
  
      fetchDaraUsers();
  
  
    }, []);

    console.log(consultas);
    

  async function agre() {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Escribe tu consulta",
      inputPlaceholder: "Haz tu consulta",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
      
    });
  
    if (text) {
      Swal.fire("Consulta realizada"),


      ConsultasLLamados.postconsults(Usuario,text)
      setTimeout(() => {
        location.reload()
      }, 700);

    }
  }
  
  function Eli(id) {
    ConsultasLLamados.deleteUser(id)
    setTimeout(() => {
      location.reload()
    }, 300)
  }

  async function Edi(id) { 

  const { value: text } = await Swal.fire({
    input: "textarea",
    inputLabel: "Edita",
    inputPlaceholder: "Edita tu consulta",
    inputAttributes: {
      "aria-label": "Type your message here"
    },
    showCancelButton: true
    
  });

  if (text) {
    Swal.fire("Consulta actualizada"),


    ConsultasLLamados.updateconsults(Usuario,text, id)
    setTimeout(() => {
      location.reload()
    }, 700);

  }
  }



    
  return (
  <main>
    <div className='prin'>
        <h1>To Do List</h1><br /><br />

        <button onClick={agre}>Agregar</button>
     
    </div>
    
    <section className='ContConsultas22'>
      {consultas.map((consulta,index) => (

        <div className='ContConsultas' key={index}>
          <p> Nombre: {consulta.nombre} </p>
          <p> Consulta: {consulta.consulta} </p>
          <button onClick={e => Edi(consulta.id)}>Editar</button>
          <button onClick={e => Eli(consulta.id)}>Eliminar</button>

        </div>
      ))}

    </section>
  </main>
   
  )
}

export default Principal