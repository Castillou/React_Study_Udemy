import { useParams } from 'react-router-dom';

function EventDetailPage() {
	const params = useParams();

	return (
		<>
			<h1>This is Event Detail Page</h1>
			<p>{params.id}</p>
		</>
	);
}

export default EventDetailPage;
