import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { useCharacterContext } from '../context/Character';
const CharacterPage = () => {

  const characterId = useParams();

  const [characterInfo, setCharacterInfo] = useState({});
  const [changeCharacterId, setChangeCharacterId] = useState(null);
  const navigate = useNavigate()

  const { getCharacterById, loader } = useCharacterContext();

  const getDataCharacter = async (id) => {

    const data = await getCharacterById(id)

    if (!data) {
      navigate('/')
    } else {
      setCharacterInfo(data)
    }

  }

  const changeId = ({ id }) => {
    setChangeCharacterId(id);
  }

  const nextCharacter = () => {
    navigate(`/character/${parseInt(changeCharacterId) + 1}`)
  }

  const prevCharacter = () => {
    navigate(`/character/${parseInt(changeCharacterId) - 1}`)
  }

  useEffect(() => {
    changeId(characterId);
  }, [characterId]);

  useEffect(() => {
    if (changeCharacterId !== null) {
      getDataCharacter(changeCharacterId);
    }
  }, [changeCharacterId]);


  return (
    <>


      <div className='grid grid-flow-col mx-[3rem] text-white bg-[#3C3E44] py-2 my-8 border border-black'>

        {loader && <Loading />}
        <div className='grid place-content-center'>
          <img className='w-[400px] border border-black' src={characterInfo.image} alt={`Personaje ${characterInfo.name}`} />
        </div>

        <div className='col-span-4 space-y-5 '>

          <div className='flex flex-col'>
            <h1 className='text-[30px] font-medium'>{characterInfo.name}</h1>

            <span className='flex items-center mt-2 p-0 font-semibold'>
              <span
                className={` h-[0.5rem] w-[0.5rem] mr-[0.375rem] rounded-[50%] border border-black/20
                ${characterInfo.status === 'Alive'
                    ? 'bg-[#55CC44]'
                    :
                    characterInfo.status === 'Dead'
                      ?
                      'bg-red-600'
                      :
                      'bg-gray-400'
                  }
          `}>
              </span>

              {characterInfo.status} - {characterInfo.species}
            </span>
          </div>

          <div className='flex flex-col'>

            <span className='text-white/50 font-medium'>Last known location:</span>
            {characterInfo.location ? (
              <span className='text-white font-medium'>{characterInfo.location.name}</span>
            ) : (
              <span>No location information available</span>
            )}
          </div>

          <div className='flex flex-col'>

            <span className='text-white/50 font-medium'>Specie:</span>

            <span className='text-white font-medium'>{characterInfo.species}</span>


          </div>

          <div className='flex flex-col'>

            <span className='text-white/50 font-medium'>Origin:</span>
            {characterInfo.origin ? (
              <span className='text-white font-medium'>{characterInfo.origin.name}</span>
            ) : (
              <span>No origin information available</span>
            )}
          </div>
        </div>

        <div>

        </div>

      </div>

      <div className='w-full flex justify-around items-center py-10 my-5'>
        <button disabled={parseInt(changeCharacterId) === 1}
          onClick={() => prevCharacter()}
          className={`text-[20px] font-normal rounded-[10px] bg-white w-[20%] h-[30px]  ${changeCharacterId == 1 ? 'bg-gray-700' : ' hover:scale-105 ease-in-out duration-200'}`}>
          Prev
        </button>

        <button
          disabled={parseInt(changeCharacterId) === 826}
          onClick={() => nextCharacter()}
          className={`text-[20px] font-normal rounded-[10px] bg-white w-[20%] h-[30px]  ${changeCharacterId == 826 ? 'bg-gray-700' : ' hover:scale-105 ease-in-out duration-200'}`}>
          Next
        </button>
      </div>
    </>
  )
}

export default CharacterPage