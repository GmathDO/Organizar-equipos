import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import { useState } from "react"
import { v4 as uuid } from "uuid"

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault()
        const datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
            id: uuid(),
            fav: false
        }
        props.registrarColaborador(datosAEnviar)
    }

    const enviarEquipos = (e) => {
        e.preventDefault()
        props.registrarEquipos({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingrese nombre" required valor={nombre} actualizarValor={setNombre}/>
            <Campo titulo="Puesto" placeholder="Ingrese puesto" required valor={puesto} actualizarValor={setPuesto}/>
            <Campo titulo="Foto" placeholder="Ingrese foto" required valor={foto} actualizarValor={setFoto}/>
            <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={props.equipos}/>
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={enviarEquipos}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={setTitulo}/>
            <Campo titulo="Color" type="color" placeholder="Ingresar el color en Hex" required valor={color} actualizarValor={setColor}/>
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario