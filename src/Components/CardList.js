import React from 'react';
import Card from './Card';

const CardList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((singlePokemon, i) => {
        return <Card key={i} name={singlePokemon.name} />
      })}
    </div>
  )
}
export default CardList