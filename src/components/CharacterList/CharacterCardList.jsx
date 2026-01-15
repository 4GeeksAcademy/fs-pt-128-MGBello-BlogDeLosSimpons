import useGlobalReducer from "../../hooks/useGlobalReducer"
import { CharacterCard } from "./CharacterCard/CharacterCard"

export const CharacterCardList = () => {
    const { store, dispatch } = useGlobalReducer()
    return (
        <>
            <div className="container mt-5 d-flex mx-auto characterContainer">
                {
                    store.characters.map(character => (
                        <CharacterCard key={character.id} character={character}/>
                    ))
                }
            </div>
        </>
    )

}