import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/events"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Events
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/newsletter"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Newsletter
						</NavLink>
					</li>
				</ul>
			</nav>
			<NewsletterSignup />
		</header>
	);
}

export default MainNavigation;

// NavLink: className의 콜백함수의 매개변수로 리액트 라우터가 제공하는 함수를 받을 수 있음 (그냥 Link 태그는 불가)
