import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown"> 
						<button className="btn btn-secondary px-4 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Me gusta {store.likes.length}
						</button>
						<ul className="dropdown-menu">
							{
								store.likes.map(characters => (
									
										<li key={characters.id} className='text-center'>
											<p>{characters.name}</p>
										</li>
								))
							}
						</ul>
					</div>
				</div>	
			</div>
		</nav>
	);
};