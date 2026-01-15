import './CharacterCard.css'
import useGlobalReducer from '../../../hooks/useGlobalReducer'
import { Link } from 'react-router-dom'
export const CharacterCard = ({ character }) => {

    const { store, dispatch } = useGlobalReducer()


    const handlerClick = () => {
        dispatch({ type: 'set_likes', payload: character })
    }

    const isLike = store.likes.some(like => like.id === character.id)

    return (
        <div className="primaryCard d-flex flex-column justify-content-center align-items-center gap-2 p-3 rounded">
            <div className='primaryImage d-flex justify-content-center mt-2 mb-2'>
                <img src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`} alt={character.name} />
            </div>
            <div className='primaryText d-flex flex-column justify-content-center align-items-center mb-3'>
                <h3 className='fs-4 text-center'>{character.name}</h3>
                <p className='text-center'>{character.occupation}</p>
                <button className='btn' onClick={handlerClick}><i className={`${isLike ? 'fa-solid text-danger' : 'fa-regular'} fa-heart fs-4 `}></i></button>
                <Link to={`/character-info/${character.id}`}>
                    <button className='btn mb-2'>Mas Info</button>
                </Link>
            </div>
        </div>

    )
}