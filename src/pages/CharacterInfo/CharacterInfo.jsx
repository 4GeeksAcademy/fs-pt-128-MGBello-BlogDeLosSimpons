import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCharacter } from "../../service/APIServices"
import { LocationList } from "../../components/LocationList/LocationList.jsx"
import './CharacterInfo.css'

export const CharacterInfo = () => {
    const { id } = useParams()

    const [character, setCharacter] = useState({})

    const getCharacterData = async () => {
        const characterData = await getCharacter(id)
        setCharacter(characterData)
    }

    useEffect(() => {
        getCharacterData()
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
                        <h1 className="text-center">{character.name}</h1>
                        <img className="img-fluid" src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`} alt={character.name} />
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-column align-items-center align-items-md-start mx-auto p-4">
                        <div className="row d-flex justify-content-md-center w-100">
                            <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                                <div className="containerInfo-pills">
                                    <p>{character.age ? character.age : 'Unknown'} years old</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4  d-flex justify-content-center align-items-center">
                                <div className="containerInfo-pills">
                                    <p>{character.birthdate ? character.birthdate : 'Unknown'}</p>
                                </div>
                            </div>
                        </div>
                        <p className="w-100 text-center mt-5">{character.occupation}</p>
                        <p className="w-100">{character.description}</p>
                    </div>
                </div>
                <div className="container mt-4">
                    <h3>Best Character Phrases</h3>
                    <div className="container containerPhrases" >

                        {Array.isArray(character.phrases) ?
                            (
                                <ul>
                                    {
                                        character.phrases.map((phrase, index) => (
                                            <li key={index}>¡{phrase}</li>
                                        ))
                                    }
                                </ul>
                            ) : (
                                <p>{character.phrase} !! Phase not found</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <LocationList className="mx-auto" />
        </>
    )
}