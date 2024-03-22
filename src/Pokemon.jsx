import React from 'react';

const Pokemon = ({ data, language }) => {
  const { id, name, type, base, image } = data;
  const pokemonName = name[language];

  return (
    <div className="pokemon">
      <img className="image" src={image} alt={pokemonName} />
      <div>[ID] {id}</div>
      <div>Name: {pokemonName}</div>
      <div className="type-container">
        {type.map((item, index) => (
          <div key={index} className="type">{item}</div>
        ))}
      </div>

      <div className="stat-groups">
        <div className="stat-group">
          <div className="stat">HP: {base.HP}</div>
          <div className="stat">Attack: {base.Attack}</div>
          <div className="stat">Defense: {base.Defense}</div>
        </div>
        <div className="stat-group">
          <div className="stat">Speed: {base.Speed}</div>
          <div className="stat">Sp. Attack: {base['Sp. Attack']}</div>
          <div className="stat">Sp. Defense: {base['Sp. Defense']}</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;