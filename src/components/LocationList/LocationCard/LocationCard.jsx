import { Link } from 'react-router-dom'
import './LocationCard.css'
import useGlobalReducer from '../../../hooks/useGlobalReducer'
export const LocationCard = ({ location }) => {
    const { store, dispatch } = useGlobalReducer()
    const handlerClick = () => {
        dispatch({ type: 'set_likes_locations', payload: location })
    }

    const isLike_loctions = store.likes_locations.some(like => like.id === location.id)

    return (
        <div className="locationCard d-flex flex-column justify-content-center align-items-center gap-2 p-3 rounded">
            <div className='locationImage d-flex justify-content-center mt-2 mb-2'>
                <img src={`https://cdn.thesimpsonsapi.com/200${location.image_path}`} alt={location.name} />
            </div>
            <div className='locationText d-flex flex-column justify-content-center align-items-center mb-3'>
                <h3 className='fs-4 text-center'>{location.name}</h3>
                <p className='text-center'>{location.town}</p>
                <p className='text-center'>{location.use}</p>
                <button className='btn' onClick={handlerClick}><i className={`${isLike_loctions ? 'fa-solid text-danger' : 'fa-regular'} fa-heart fs-4 `}></i></button>
                <Link to={`/location-info/${location.id}`}>
                    <button className='btn mb-2'>Mas Info</button>
                </Link>


            </div>
        </div>

    )
}