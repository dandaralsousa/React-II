import "../Components/index.css"

function Titulo(props){
    const textoCapsLock = props.titulo
    const novoTitulo = textoCapsLock.toUpperCase()
    return (
        <h1 className="texto">{novoTitulo}</h1>
    )
}

export default Titulo