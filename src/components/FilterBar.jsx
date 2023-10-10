import { useCharacterContext } from '../context/Character';

export const FilterBar = () => {

    const { handleCheckbox, active } = useCharacterContext();

    return (
        <div className={`w-full bg-yellow-400 ease-in-out duration-300 ${active ? 'translate-y-0 fixed' : ' -translate-y-24 hidden '} `}>
            <div className='filter-by-type'>
                <span>Status</span>

                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='Alive'
                        id='Alive'
                    />
                    <label htmlFor='Alive'>Vivo</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='Dead'
                        id='Dead'
                    />
                    <label htmlFor='Dead'>Muerto</label>
                </div>

                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='Unknow'
                        id='Unknow'
                    />
                    <label htmlFor='Unknow'>Desconocido</label>
                </div>
            </div>
        </div>
    );
};