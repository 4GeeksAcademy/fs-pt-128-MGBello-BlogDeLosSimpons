import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getLocations } from "../service/APIServices.js";
import { CharacterCardList } from "../components/CharacterList/CharacterCardList.jsx";
import { LocationList } from "../components/LocationList/LocationList.jsx"


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		getCharacters(dispatch)
		getLocations(dispatch)
	}, [])

	return (
		<>
			<CharacterCardList />
			<LocationList />
		</>
	);
}; 