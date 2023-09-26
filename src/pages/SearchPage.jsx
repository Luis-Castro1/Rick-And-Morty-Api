import React from 'react'
import { useCharacterContext } from '../context/Character';
import { Link, useLocation } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard';

const SearchPage = () => {

  const { allCharacters } = useCharacterContext();

  const location = useLocation();

  const search = location.state.toLowerCase();

  const filteredCharacters = allCharacters.filter(character => character.name.toLowerCase().includes(search));


  return (
    <div className='flex flex-col'>

      <div className='bg-red-500 flex h-full'>
        <p className='p-search text-white'>
          Se encontraron <span>{filteredCharacters.length}</span>{' '}
          resultados:
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <div className='flex flex-wrap justify-center gap-[50px] w-full  mx-5 py-5 '>

          {filteredCharacters.map((characterIndex) => {
            return (
              <Link to={`/character/${characterIndex.id}`} key={characterIndex.id}>
                <CharacterCard character={characterIndex} key={characterIndex.id} />
              </Link>
            )
          })}

        </div>


      </div>
    </div>
  );
}

export default SearchPage