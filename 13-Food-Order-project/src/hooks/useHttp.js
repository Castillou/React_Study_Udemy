import { useCallback, useEffect, useState } from 'react';

async function sendHttpRequest(url, config) {
	const response = await fetch(url, config);

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(
			resData.message || 'Someting went wrong, failed to send request.'
		);
	}

	return resData;
}

export default function useHttp(url, config, initialData) {
	const [data, setData] = useState(initialData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	function clearData() {
		setData(initialData);
	}

	const sendRequest = useCallback(
		async function sendRequest(data) {
			setIsLoading(true);
			try {
				const resData = await sendHttpRequest(url, { ...config, body: data });
				setData(resData);
			} catch (error) {
				setError(error.message || 'Something went wrong!');
			}
			setIsLoading(false);
		},
		[url, config]
	);

	// 이 훅을 사용하는 컴포넌트가 로딩될 때마다 sendRequest함수가 실행되서 백엔드에 요청을 보내게 됨
	useEffect(() => {
		if ((config && (config.method === 'GET' || !config.method)) || !config) {
			sendRequest();
		}
	}, [sendRequest, config]);

	return {
		data,
		isLoading,
		error,
		sendRequest,
		clearData,
	};
}
