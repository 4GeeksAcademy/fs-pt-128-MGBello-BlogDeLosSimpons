import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getLocation } from "../../service/APIServices.js"
import './LocationInfo.css'
import { CharacterCardList } from "../../components/CharacterList/CharacterCardList.jsx"

export const LocationInfo = () => {
    const { id } = useParams()

    const [location, setLocation] = useState({})

    const getLocationData = async () => {
        const locationData = await getLocation(id);
        if (locationData) {
            setLocation(locationData);
        }
    };

    useEffect(() => {
        getLocationData()
        window.scrollTo(0, 0)

    }, [id])

    return (
        <>
            <div className="container mx-auto mt-5 p-3 rounded containerInfo mx-auto">
                <Link to={'/'}>
                    <button className="btn"><i className="fa-solid fa-arrow-left-long"></i></button>
                </Link>
                <div className="row g-0 align-items-center">
                   <div className="col-md-6 col-12 containerImg d-flex flex-column align-items-center justify-content-center mx-auto">
                        <h1 className="text-center">{location.name}</h1>
                        <img className="img-fluid" src={`https://cdn.thesimpsonsapi.com/500${location.image_path}`} alt={location.name} />
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-column align-items-center align-items-md-start mx-auto p-4">
                        <h3 className="w-100 text-center mt-5">{location.town}</h3>
                        <h3 className="w-100 text-center">{location.use}</h3>
                    </div>
                </div>

            </div>


            <CharacterCardList className="mx-auto" />
        </>
    )
}