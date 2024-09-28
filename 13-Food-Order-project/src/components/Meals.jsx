import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';

// 매개변수를 바깥에서 전달하는 것으로 객체를 단 한번만 생성하게 됨
const requestConfig = {};

export default function Meals() {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp('http://localhost:3000/meals', requestConfig, []);

	if (isLoading) {
		return <p className="center">Fetching meals...</p>;
	}

	if (error) {
		return <Error title="Failed to fetch meals" message={error} />;
	}

	return (
		<ul id="meals">
			{loadedMeals.map((meal) => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
}

/*
	fetchMeals(); : Is not Ideal way
	: 컴포넌트 함수 내에서 함수를 실행시키게 되면 위 fetchMeals 함수는 state를 변경시키기 때문에 컴포넌트 함수가 재실행 됨 => 그렇다면 재실행의 반복 => "무한루프"
	[해결방법] : useEffect() : 컴포넌트가 마운트 될 때 실행되게 하면 됨
*/
