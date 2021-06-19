import React, {useState, useEffect} from 'react';
import '../Components/index.css'

const Mapeamento = () =>{
    const [personagens, setPersonagens] = useState([])
    //console.log(personagens)

    const [filtroPersonagem, setFiltroPersonagem] = useState([]) //placeholder do input
    const [busca, setBusca] = useState('')



    //API
    useEffect(()=>{
        fetch ('http://hp-api.herokuapp.com/api/characters')
        .then(resposta => resposta.json())
        .then(dados => setPersonagens(dados))
    }, [])

   

    function addAmo(name) {
        const novaListaAmo = personagens.map(personagem => {
            //o id do personagem é igual ao id do paramêtro?
            return personagem.name === name ? {...personagem, amo:!personagem.amo}:personagem
        })
        setPersonagens(novaListaAmo)
    }

    function addOdeio(name) {
        const novaListaOdeio = personagens.map(personagem => {
            return personagem.name === name ? {...personagem, odeio:!personagem.odeio}:personagem
        })
        setPersonagens(novaListaOdeio)
    }

     //Atualizar a variável de busca
     useEffect(()=>{
        setFiltroPersonagem(
            personagens.filter(persona =>{
                    return persona.name.includes(busca)
                })
        )

     }, [busca, personagens])

      return (
        <>
        <input placeholder="Busque pelo personagem" onChange={e=>{setBusca(e.target.value)}}/>
                
        {filtroPersonagem.map(persona=>(
            <div className="caixa" key={persona.id}>
                <p><b>{persona.name}</b></p>
                <img src={persona.image} alt={persona.name}/>
                {persona.amo && <span>Amo</span>}
                <button className="btn" onClick={()=>addAmo(persona.name)}>❤️</button>
                {persona.odeio && <span>Ranço</span>}
                <button className="btn" onClick={()=>addOdeio(persona.name)}>🤢</button>
            </div>
            
        ))}
        </>
    )
}

export default Mapeamento