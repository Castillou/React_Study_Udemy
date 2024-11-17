import {
	Link,
	redirect,
	useNavigate,
	useNavigation,
	useParams,
	useSubmit,
} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import { useQuery } from '@tanstack/react-query';

export default function EditEvent() {
	const submit = useSubmit();
	const navigate = useNavigate();
	const { state } = useNavigation();
	const params = useParams();

	const { data, isError, error } = useQuery({
		queryKey: ['event', params.id],
		queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
		staleTime: 10000,
	});

	// const { mutate } = useMutation({
	// 	mutationFn: updateEvent,
	// 	onMutate: async (data) => {
	// 		const newEvent = data.event;

	// 		await queryClient.cancelQueries({ queryKey: ['events', params.id] });
	// 		const previousEvent = queryClient.getQueryData(['events', params.id]);

	// 		queryClient.setQueryData(['events', params.id], newEvent);

	// 		return { previousEvent };
	// 	},
	// 	onError: (error, data, context) => {
	// 		queryClient.setQueryData(['events', params.id], context.previousEvent);
	// 	},
	// 	onSettled: () => {
	// 		queryClient.invalidateQueries(['events', params.id]);
	// 	},
	// });

	function handleSubmit(formData) {
		submit(formData, { method: 'PUT' });
	}

	function handleClose() {
		navigate('../');
	}

	let content;

	if (isError) {
		content = (
			<>
				<ErrorBlock
					title="Failed to load event"
					message={
						error.info?.message ||
						'Failed to load event. Please check your inputs and try again later.'
					}
				/>
				<div className="form-actions">
					<Link to="../" className="button">
						Okay
					</Link>
				</div>
			</>
		);
	}

	if (data) {
		content = (
			<EventForm inputData={data} onSubmit={handleSubmit}>
				{state === 'submitting' ? (
					<p>Sending data...</p>
				) : (
					<>
						<Link to="../" className="button-text">
							Cancel
						</Link>
						<button type="submit" className="button">
							Update
						</button>
					</>
				)}
			</EventForm>
		);
	}

	return <Modal onClose={handleClose}>{content}</Modal>;
}

/* eslint-disable react-refresh/only-export-components */
export function loader({ params }) {
	return queryClient.fetchQuery({
		queryKey: ['event', params.id],
		queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
	});
}

export async function action({ request, params }) {
	const formData = await request.formData();
	const updatedEventData = Object.fromEntries(formData);
	await updateEvent({ id: params.id, event: updatedEventData });
	await queryClient.invalidateQueries(['events']);
	return redirect('../');
}
