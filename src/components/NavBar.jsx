import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useCharacterContext } from '../context/Character';

const NavBar = () => {

  const logo = useParams();

  const { onInputChange, valueSearch, onResetForm, loader, getCharacterByStatus } = useCharacterContext();
  const navigate = useNavigate();

  const onSearchSubmit = e => {
    e.preventDefault();
    if (valueSearch === '') {
      e.preventDefault();

    } else {
      navigate('/search', {
        state: valueSearch,
      });

      onResetForm();
    }
  };

  return (
    <>
      <nav>
        <div className='relative bg-white flex justify-center items-center py-10 '>
          <div className="absolute left-[2rem] sm:left-[3rem] text-[20px]">
            <Link to='/'>

              <img className='w-[70%]' src={Object.keys(logo).length === 0
                ?
                "/src/assets/Logo.svg"
                :
                "/src/assets/LogoSecondary.svg"} alt="" />

            </Link>
          </div>
          <div className="justify-center gap-x-10 relative w-[70%] text-[20px] flex">

            <form
              className='w-[70%]'
              onSubmit={onSearchSubmit}>
              <input
                name="valueSearch"
                value={valueSearch}
                onChange={onInputChange}
                autoComplete='off'
                placeholder="Buscar Personaje"
                className='w-full bg-white/10 border border-black  focus:outline-none rounded-sm pr-1 pl-8'
                type="search" />
              <FontAwesomeIcon className="absolute left-9 top-1" icon={faSearch} />
            </form>

            <div className='w-[20%] flex justify-around'>
              <label htmlFor="Dead">Alive</label>
              <input onChange={getCharacterByStatus} type="checkbox" name="Alive" id="Alive" />

              <label htmlFor="Dead">Dead</label>
              <input onChange={getCharacterByStatus} type="checkbox" name="Dead" id="Dead" />
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar