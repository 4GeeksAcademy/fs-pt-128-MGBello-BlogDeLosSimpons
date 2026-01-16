import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	return (
		<nav className="navbar navbar-dark navbarCustom">
			<div className="container-fluid">
				<Link to="/">
					<img className="navbarLogo mx-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1024px-The_Simpsons_yellow_logo.svg.png" alt="Logo" />
				</Link>
				<div className="mx-4">
					<div className="dropdown"> 
						<button className="btn btn-outline-dark px-4 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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