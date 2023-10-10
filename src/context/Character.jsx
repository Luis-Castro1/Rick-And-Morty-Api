import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useForm } from '../Hooks/UseForm'

export const characterContext = createContext();


export function Character({ children }) {

    const [characters, setCharacters] = useState([])
    const [allCharacters, setAllCharacters] = useState([])
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(false)

    // Utilizar CustomHook - useForm
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: '',
    });


    const getCharacter = async () => {

        try {
            setLoader(true)
            const baseUrl = 'https://rickandmortyapi.com/api/'
            const response = await axios.get(`${baseUrl}character?page=${page}`)

            const dataCharacters = response.data;

            const getInfoCharacters = dataCharacters.results.map(async (character) => {

                const res = await axios.get(character.url);
                const characterData = res.data;
                return characterData;
            });

            const results = await Promise.all(getInfoCharacters)

            setCharacters([...characters, ...results]);

        } catch (error) {
            console.error(error)
        } finally {
            setLoader(false)
        }

    }

    const getAllCharacter = async () => {

        try {
            const allCharactersCopy = ([]);

            const baseUrl = 'https://rickandmortyapi.com/api/'

            for (let i = 1; i <= 42; i++) {
                setLoader(true)

                const response = await axios.get(`${baseUrl}character?page=${i}`)

                const dataCharacters = response.data;

                const getInfoCharacters = dataCharacters.results.map(async (character) => {

                    const res = await axios.get(character.url);
                    const characterData = res.data;
                    return characterData;
                });

                const results = await Promise.all(getInfoCharacters)

                allCharactersCopy.push(...results);

            }

            setAllCharacters([...allCharacters, ...allCharactersCopy]);

        } catch (error) {
            console.error(error)
        } finally {
            setLoader(false)
        }

    }

    const getCharacterById = async character => {

        try {
            setLoader(true)
            const id = character;
            const baseUrl = 'https://rickandmortyapi.com/api/'
            const response = await axios.get(`${baseUrl}character/${id}`)
            const dataCharacters = response.data;
            return dataCharacters;


        } catch (error) {
            console.error(error)
        }
        finally {
            setLoader(false)
        }
    }

    const onClickLoadMore = () => {
        setPage(page + 1)
    }



    const [statusSelected, setStatusSelected] = useState({
        Alive: false,
        Dead: false,
    })

    const [characterByStatus, setCharacterByStatus] = useState([])

    const getCharacterByStatus = e => {
        setStatusSelected({
            ...statusSelected,
            [e.target.name]: e.target.checked,
        })

        if (e.target.checked) {
            const filteredResults = allCharacters.filter(character => character.status.includes(e.target.name))

            setCharacterByStatus([...characterByStatus, ...filteredResults]);

        } else {
            const filteredResults = characterByStatus.filter(
                character => !character.status.includes(e.target.name));
            setCharacterByStatus([...filteredResults]);
        }

    }

    useEffect(() => {
        getCharacter();
    }, [page])

    useEffect(() => {
        getAllCharacter();
    }, [])



    return (
        <characterContext.Provider
            value={
                {
                    characters,
                    allCharacters,
                    getCharacterById,
                    loader,
                    onClickLoadMore,
                    valueSearch,
                    onInputChange,
                    onResetForm,
                    getCharacter,
                    getCharacterByStatus,
                    characterByStatus
                }
            }
        >
            {children}

        </characterContext.Provider>
    );
}

export const useCharacterContext = () => useContext(characterContext);
