import { useEffect } from "react"
import useGlobalReducer from "../../hooks/useGlobalReducer"
import { LocationCard } from "./LocationCard/LocationCard"
import { getLocations } from "../../service/APIServices"


export const LocationList = () =>{
    const {store, dispatch} = useGlobalReducer()
    
    useEffect(()=>{
        getLocations(dispatch)
    },[])
    
    return(
        <div className="container mt-5 d-flex mx-auto characterContainer">
            {
                store.locations.map(location =>(
                    <LocationCard location={location} key={location.id}/>
                ))
            }
        </div>
    )
}