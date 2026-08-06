import {useState} from 'react'

function CartesPokemon(props) {
    const {pokemon} = props;
    return (
        <div className='cartePoké'>
            <p>{pokemon.id}</p>
            <img src={pokemon.image}></img>
            <h3>{pokemon.name}</h3>
            <h5>{pokemon.types.join(' and ')}</h5>
        </div>
    )
}

export default CartesPokemon;