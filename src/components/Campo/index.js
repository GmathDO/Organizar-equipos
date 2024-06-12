import "./Campo.css"

const Campo = (props) => {

    const {type="text", titulo, placeholder, required, valor} = props

    const manejarEnvio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const placeholderModificado = `${placeholder}...`
    return <div className={`campo campo-${type}`}>
        <label>{titulo}</label>
        <input type={type} placeholder={placeholderModificado} required={required} value={valor} onChange={manejarEnvio}/>
    </div>
}

export default Campo