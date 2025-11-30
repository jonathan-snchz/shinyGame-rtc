import React from 'react'

const PokemonDisplay = ({pokemon, isShiny}) => {
  return (
    <div className='pokeDisplay'>
        <h1>{pokemon.name}</h1>
        <h2>nº: {pokemon.id}</h2>
        <img src={isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  )
}

export default PokemonDisplay