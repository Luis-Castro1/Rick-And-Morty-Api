import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useCharacterContext } from '../context/Character';

const NavBar = () => {

  const logo = useParams();

  const { onInputChange, valueSearch, onResetForm, loader } = useCharacterContext();
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

              {Object.keys(logo).length === 0
                ?
                <img className='w-[70%]' src="/src/assets/Logo.svg" alt="" />
                :
                <img className='w-[70%]' src="/src/assets/LogoSecondary.svg" alt="" />}

            </Link>
          </div>
          <div className="relative w-1/2 text-[20px] ">

            <form
              onSubmit={onSearchSubmit}>
              <input
                name="valueSearch"
                value={valueSearch}
                onChange={onInputChange}
                autoComplete='off'
                placeholder="Buscar Personaje"
                className='w-full bg-white/10 border border-black  focus:outline-none rounded-sm pr-1 pl-8'
                type="search" />
              <FontAwesomeIcon className="absolute left-1 top-1" icon={faSearch} />
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar