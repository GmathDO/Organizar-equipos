import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    const {colorPrimario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    return <>
        {
            colaboradores.length > 0 ? <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.55)}}>
                <input type="color" className="color" value={colorPrimario} onChange={(e) => {actualizarColor(e.target.value, id)}} />
                <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        props.colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like} /> )
                    }
                </div>
            </section> : <></>
        }
    </>
}

export default Equipo