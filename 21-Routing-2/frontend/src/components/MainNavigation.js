import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
	const activeHandler = ({ isActive }) =>
		isActive ? classes.active : undefined;

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink to="/" className={activeHandler} end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/events" className={activeHandler}>
							Events
						</NavLink>
					</li>
					<li>
						<NavLink to="/events/:id" className={activeHandler}>
							EventDetail
						</NavLink>
					</li>
					<li>
						<NavLink to="/events/new" className={activeHandler}>
							NewEvent
						</NavLink>
					</li>
					<li>
						<NavLink to="/events/id/edit" className={activeHandler}>
							EditEvent
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
