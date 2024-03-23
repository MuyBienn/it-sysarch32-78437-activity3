import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon.jsx';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('english');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pagination?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemonList(data.data); // Assuming data is an object with a 'data' property containing the list of pokemon
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pokedex">
      <div className="filters">
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      {totalPages > 0 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
          ))}
        </div>
      )}
      {pokemonList.map(pokemon => (
        <Pokemon key={pokemon.id} data={pokemon} language={language} />
      ))}
    </div>
  );
};

export default Pokedex;
