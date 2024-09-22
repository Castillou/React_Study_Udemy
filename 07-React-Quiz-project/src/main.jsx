import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// StrictMode에서는 모든 컴포넌트 함수를 보이지 않게 두 번 호출함
// -> 앱 내에서 특정한 에러를 잡아내는데 도움을 줌
// => 앱은 컴포넌트 함수가 화면에 렌더링 될때 몇 번 실행되든 똑같이 정확하게 작동해야하기 때문
