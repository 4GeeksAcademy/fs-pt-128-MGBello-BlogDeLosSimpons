import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const handlerClick = (id) => {
		dispatch({ type: 'set_delete', payload: id })
	}
	const handlerClickLocations = (id) => {
		dispatch({ type: 'set_delete_locations', payload: id })
	}

	return (
		<nav className="navbar navbar-dark navbarCustom">
			<div className="container-fluid">
				<Link to="/">
					<img className="navbarLogo mx-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1024px-The_Simpsons_yellow_logo.svg.png" alt="Logo" />
				</Link>
				<div className="mx-4">
					<div className="dropdown">
						<button className={`btn ${store.likes.length + store.likes_locations.length > 0 ? 'btn-outline-danger' : 'btn-outline-dark'} px-4 dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Me gusta {store.likes.length + store.likes_locations.length}
						</button>
						<ul className="dropdown-menu">
							<li className="text-center fw-bold text-decoration-underline">Personajes</li>
							{
								store.likes.length > 0 ? (
									store.likes.map(characters => (
										
										<li key={characters.id} className='text-center'>
											<div className="d-flex g-1 justify-content-center align-items-center border-bottom p-1">
												<p className="mx-1 mb-0">{characters.name}</p>
												<button className="btn " onClick={() => handlerClick(characters.id)}>
													<i class="fa-regular fa-trash-can text-danger"></i>
												</button>
											</div>
 
										</li>
									))
								) : (<p className="text-center">No hay likes</p>)

							}
							<li className="text-center fw-bold text-decoration-underline">Ubicaciones</li>
								{
								store.likes_locations.length > 0 ? (
									store.likes_locations.map(locations => (
										
										<li key={locations.id} className='text-center'>
											<div className="d-flex g-1 justify-content-center align-items-center border-bottom p-1">
												<p className="mx-1 mb-0">{locations.name}</p>
												<button className="btn " onClick={() => handlerClickLocations(locations.id)}>
													<i class="fa-regular fa-trash-can text-danger"></i>
												</button>
											</div>
 
										</li>
									))
								) : (<p className="text-center">No hay likes</p>)

							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};