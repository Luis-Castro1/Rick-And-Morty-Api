import React from 'react'

const Loading = () => {
    return (
        <div className="loader-container fixed top-0 left-0 w-full h-full bg-black/70 flex
    justify-center  items-center z-[9999]">
            <div className="loader  border-[3px] border-[#f3f3f3]  border-t-[3px] border-t-[#dc5e04] rounded-[50%] w-[50px] h-[50px] animate-[spin_2s_linear_infinite]"></div>
        </div>
    )
}

export default Loading