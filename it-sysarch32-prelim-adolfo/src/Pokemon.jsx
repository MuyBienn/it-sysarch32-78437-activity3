import React from 'react';

const Pokemon = ({ data, language }) => {
  const { id, name, type, base, image } = data;
  const pokemonName = name[language];

  return (
    <div className="pokemon">
      <img className="image" src={image} alt={pokemonName} />
      <div>[ID] {id}</div>
      <div>Name: {pokemonName}</div>
    </div>
  );
};

export default Pokemon;