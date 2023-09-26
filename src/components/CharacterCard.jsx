import React from 'react'
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {


    return (
        <>

            <div key={character.id} className='flex flex-col bg-[#3C3E44] text-white rounded-[10px] border border-black px-4 w-[300px] h-auto'>

                <div className='grid gap-y-5 justify-center w-full'>
                    <img
                        className='w-[200px] h-[200px] mt-3 rounded-[100%] border border-white/30'
                        src={character.image} alt="" />

                    <strong className='text-center pb-2'>
                        {character.name}
                    </strong>
                </div>

                <hr />

                <span className='flex items-center mt-2 p-0 font-semibold'>
                    <span
                        className=
                        {`${character.status === 'Alive'
                            ? 'bg-[#55CC44]'
                            :
                            character.status === 'Dead'
                                ?
                                'bg-red-600'
                                :
                                'bg-gray-400'
                            }

                                        h-[0.5rem] w-[0.5rem] mr-[0.375rem] rounded-[50%] border border-black/20`}></span>

                    {character.status}
                </span>

                <span className='flex items-center mb-2 p-0 font-semibold'>

                    Origen:
                    <span className='font-normal ml-2'>{character.origin.name}</span>
                </span>

            </div>
        </>
    )
}

export default CharacterCard