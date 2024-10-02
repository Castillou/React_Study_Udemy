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
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;

// NavLink: className의 콜백함수의 매개변수로 리액트 라우터가 제공하는 함수를 받을 수 있음 (그냥 Link 태그는 불가)
