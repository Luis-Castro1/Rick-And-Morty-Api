import React from 'react'

const Loading = () => {
    return (
        <div className="loader-container fixed top-0 left-0 w-full h-full bg-black flex
    justify-center  items-center z-[9999] flex-col gap-3">
            <div className="loader   animate-[spin_2s_linear_infinite]">
                <div className='border-[3px]  border-[#f3f3f3] rounded-[100%] w-[50px] h-[50px] shadow-md shadow-purple-600 border-b-[6px] border-b-[#9333ea]'>

                </div>
            </div>
            <p className='text-white'>Cargando...</p>
        </div>
    )
}

export default Loading