import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCharacter } from "../../service/APIServices"
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
    }, [])

    return (
        <div className="container mx-auto mt-4 p-3 rounded containerInfo">
            <div className="row w-100">
                <div className="col-6">
                    <p className="text-center">{character.name}</p>
                </div>
                <div className="col-3">
                    <div className="containerInfo-pills">
                       <p>{character.age} years old</p> 
                    </div>
                    

                </div>
                <div className="col-3">
                    <p>{character.birthdate}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 containerImg d-flex flex-column align-items-center justify-content-center">
                    <img src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`} alt={character.name}  />
                </div>
                <div className="col-6 d-flex flex-column align-items-center justify-content-center mx-auto">
                    <p className="">{character.occupation}</p>
                    <p>{character.description}</p>
                </div>
            </div>
            <div >
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
    )
}