// import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterAcions } from '../store/counter';

const Counter = () => {
	const dispatch = useDispatch();
	// useSelector 설정 시 자동으로 구독 설정 됨 -> 저장소의 상태가 바뀔 때마다 UI가 업데이트 됨
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(counterAcions.increment());
	};

	const increaseHandler = () => {
		dispatch(counterAcions.increase(10));
		// { type: SOME_UNIQUE_IDENTIFIER,payload: 10 } → 추가 필드명은 payload 고정
	};

	const decrementHandler = () => {
		dispatch(counterAcions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterAcions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increment by 10</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

/*
class Counter extends Component {
	incrementHandler() {
		this.props.increment();
	}

	decrementHandler() {
		this.props.decrement();
	}

	toggleCounterHandler() {}

	render() {
		return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				<div className={classes.value}>{this.props.counter}</div>
				<div>
					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
				</div>
				<button onClick={this.toggleCounterHandler.bind(this)}>
					Toggle Counter
				</button>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: 'INCREMENT' }),
		decrement: () => dispatch({ type: 'DECREMENT' }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
