import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, {
	loader as eventsDetailLoader,
	action as deleteEventAction,
} from './pages/EventDetail';
import NewEventPage, { action as newEventAction } from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ':id',
						id: 'event-detail',
						loader: eventsDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteEventAction,
							},
							{ path: 'edit', element: <EditEventPage /> },
						],
					},
					{ path: 'new', element: <NewEventPage />, action: newEventAction },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
