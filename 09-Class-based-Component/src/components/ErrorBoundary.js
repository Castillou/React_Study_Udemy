import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error) {
        this.setState({ hasError: true });
    } // 클래스 컴포넌트를 오류 경계로 만듦

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
