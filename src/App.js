import './App.css';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/index.js';
import Equipo from './components/Equipo/index.js';
import Footer from './components/Footer/index.js';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      nombre:"Harland Lohora",
      puesto:"Instructor",
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      fav: false
    },
    {
      id: uuid(),
      nombre:"Genesys Rondón",
      puesto:"Desarroladora de software e instructora",
      equipo:"Programación",
      foto:"https://github.com/genesysR-dev.png",
      fav: false
    },
    {
      id: uuid(),
      nombre:"Jeanmarie Quijada",
      puesto:"Instructora",
      equipo:"Devops",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      fav: false
    },
    {
      id: uuid(),
      nombre:"Christian Velasco",
      puesto:"Head de Alura e instructor",
      equipo:"Front End",
      foto:"https://github.com/christianpva.png",
      fav: false
    }
  ])
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8D2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map( (colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const registrarEquipos = (nuevoEquipo) => {
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  return (
    <div>
      <Header></Header>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map( (equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} registrarEquipos={registrarEquipos}/> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      { equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like}/> ) }
      <Footer></Footer>
    </div>
  );
}

export default App;