import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
	// const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;

// useLoaderData: 자신보다 낮은 수준에 있는 데이터에서만 데이터를 불러올 수 있음
