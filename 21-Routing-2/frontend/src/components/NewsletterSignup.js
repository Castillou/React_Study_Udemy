import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
	const fetcher = useFetcher();
	const { data, state } = fetcher;

	useEffect(() => {
		if (state === 'idle' && data && data.message) {
			window.alert(data.message);
		}
	}, [data, state]);

	return (
		<fetcher.Form
			method="post"
			action="/newsletter"
			className={classes.newsletter}
		>
			<input
				type="email"
				placeholder="Sign up for newsletter..."
				aria-label="Sign up for newsletter"
			/>
			<button>Sign up</button>
		</fetcher.Form>
	);
}

export default NewsletterSignup;

// fetcher를 사용하게되면 라우트 전환을 하지 않을 수 있음
