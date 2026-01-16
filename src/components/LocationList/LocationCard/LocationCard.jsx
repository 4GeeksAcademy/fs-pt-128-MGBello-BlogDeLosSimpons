
import './LocationCard.css'
export const LocationCard = ({ location }) => {


    return (
        <div className="locationCard d-flex flex-column justify-content-center align-items-center gap-2 p-3 rounded">
            <div className='locationImage d-flex justify-content-center mt-2 mb-2'>
                <img src={`https://cdn.thesimpsonsapi.com/200${location.image_path}`} alt={location.name} />
            </div>
            <div className='locationText d-flex flex-column justify-content-center align-items-center mb-3'>
                <h3 className='fs-4 text-center'>{location.name}</h3>
                <p className='text-center'>{location.town}</p>
                <p className='text-center'>{location.use}</p>
            </div>
        </div>

    )
}