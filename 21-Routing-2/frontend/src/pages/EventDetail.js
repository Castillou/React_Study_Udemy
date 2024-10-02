import { useParams, NavLink } from 'react-router-dom';

function EventDetailPage() {
	const params = useParams();

	return (
		<>
			<h1>This is Event Detail Page</h1>
			<p>Event ID: {params.id}</p>
			<NavLink to="/events/:id/edit">EditEvent</NavLink>
		</>
	);
}

export default EventDetailPage;
