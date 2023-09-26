import { useCharacterContext } from '../context/Character';
import Loading from '../components/Loading'
import CharactersList from '../components/CharactersList';

const Home = () => {

    const { loader, onClickLoadMore } = useCharacterContext();

    return (
        <>
            {loader && <Loading />}

            <CharactersList />

            <div className='w-full flex justify-center items-center py-10'>
                <button 
                onClick={() => onClickLoadMore()}
                className='w-[15%] bg-white text-black text-[18px] font-normal h-[30px] rounded-md'>
                    Load More...
                </button>
            </div>
        </>
    )
}

export default Home