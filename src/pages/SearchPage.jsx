import React from 'react'
import { useCharacterContext } from '../context/Character';
import { Link, useLocation } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';

const SearchPage = () => {

  const { allCharacters, loader } = useCharacterContext();

  const location = useLocation();

  const search = location.state.toLowerCase();

  const filteredCharacters = allCharacters.filter(character => character.name.toLowerCase().includes(search));


  return (
    <>
      {loader ? <Loading />
        :
        <div className='flex flex-col'>

          {filteredCharacters.length ?
            <>
              <div className='bg-[#272B30] flex h-full px-12 py-5 border-b border-black/50'>
                <p className='p-search text-white font-medium'>
                  Se encontraron <span>{filteredCharacters.length}</span>{' '}
                  resultados para <span className='font-bold'>{search.toUpperCase()}</span>
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
            </>
            :
            <div className='fixed bg-[#272B33] w-full h-full flex justify-center'>
              <p className='p-search text-[50px] text-white py-[7rem]'>
                No se encontraron resultados para <span className='font-bold'>{search.toUpperCase()}</span>{' '}
              </p>
            </div>
          }


        </div>}


    </>
  );
}

export default SearchPage