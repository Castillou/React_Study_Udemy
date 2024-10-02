import { NavLink } from 'react-router-dom';

const DUMMY_EVENTS = [
	{ id: 'e1', title: 'Event 1' },
	{ id: 'e2', title: 'Event 2' },
	{ id: 'e3', title: 'Event 3' },
];

function EventsPage() {
	return (
		<>
			<h1>This is Events Page</h1>
			<ul>
				{DUMMY_EVENTS.map((event) => (
					<li key={event.id}>
						<NavLink to={event.id}>{event.title}</NavLink>
					</li>
				))}
			</ul>
		</>
	);
}

export default EventsPage;
