import { Link } from 'react-router-dom';
import { useCharacterContext } from '../context/Character'
import CharacterCard from './CharacterCard';

const CharactersList = () => {

    const { characters } = useCharacterContext();

    return (
        <div className='flex flex-wrap justify-center gap-[50px] mt-5 w-full py-5 overflow-hidden '>
            {characters.map((characterIndex) => {
                return (
                    <Link key={characterIndex.id} to={`/character/${characterIndex.id}`}>
                        <CharacterCard character={characterIndex} key={characterIndex.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default CharactersList